const express = require("express");
const router = express.Router();

const { generateJsonObj } = require("../data/csvParser.js");
full_json_data = generateJsonObj();

const {
  buildDataDict,
  buildStatesDict,
  buildStatesPriceDict,
  buildRegionPriceList,
  buildDataMap
} = require("../dbloader/load_data.js");


const data_dict = buildDataDict(full_json_data);
const states_dict = buildStatesDict(data_dict);
const states_price_dict = buildStatesPriceDict(data_dict, states_dict);
const region_prices = buildRegionPriceList(data_dict);
const data_map = buildDataMap(full_json_data);

router.get("/api", (req, res) => {
  console.log("[INFO] Get request recieved at /api");
  // query it before sending it back!
  json = full_json_data;
  res.end(JSON.stringify(json));
});

router.get("/data-map", (req, res) => {
  console.log("[INFO] Get request recieved at /map");
  json = full_json_data;
  res.end(JSON.stringify(data_map));
});

//get request for cheapest states
router.get("/states", (req, res) => {
  console.log("[INFO] Get request recieved at /states");
  var results = states_price_dict;
  // res.json(results);
  res.end(JSON.stringify(results));
});

//get request for cheapest cities
router.get("/cheap-cities", (req, res) => {
  console.log("[INFO] Get request recieved at /cheap-cities");
  var results = region_prices;
  results.sort(function (a, b) {
    return a[1] - b[1];
  });
  top_ten = results.slice(0, 10);
  res.end(JSON.stringify(top_ten));
});

//get request for most expsensive cities
router.get("/expensive-cities", (req, res) => {
  console.log("[INFO] Get request recieved at /expensive-cities");
  var results = region_prices;
  results.sort(function (a, b) {
    return b[1] - a[1];
  });
  top_ten = results.slice(0, 10);
  res.end(JSON.stringify(top_ten));
});

//get request for city names for dropdown, return as [{value: RegionID, label: Region}]
router.get("/cities", (req, res) => {
  console.log("[INFO] Get request recieved at /cities");

  var city_names = [];
  Object.entries(data_map).map(([key, value]) => {
    city_names.push({ value: key, label: value.RegionName });
  });

  res.end(JSON.stringify(city_names));
});

// return data for selected regions, return as [{name:, data:}]
router.post("/display", (req, res) => {
  console.log("[INFO] /display request receive:", req.body);
  
  var results = [];
  for (let i = 0; i < req.body.length; i++) {
    var ID = req.body[i];
    var record = data_map[ID];
    var prices = [
      record.year2014,
      record.year2015,
      record.year2016,
      record.year2017,
      record.year2018,
      record.year2019,
      record.year2020,
      record.year2021,
    ];
    results.push({ name: data_map[ID].RegionName, data: prices });
  }

  res.send(results);
});

module.exports = router;
