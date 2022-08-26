const express = require('express');
const router = express.Router();

const { generateJsonObj } = require("../data/csvParser.js");
full_json_data = generateJsonObj();


const {buildDataDict, buildStatesDict, buildStatesPriceDict, buildRegionPriceList} = require("../dbloader/load_data.js");
const data_dict = buildDataDict(full_json_data);
const states_dict = buildStatesDict(data_dict);
const states_price_dict = buildStatesPriceDict(data_dict, states_dict);
const region_prices = buildRegionPriceList(data_dict);

router.get('/api', (req, res) => {
  console.log("[INFO] Get request recieved at /api");
  // query it before sending it back!
    json =  full_json_data;
    res.end(JSON.stringify(json));
});

//get request for cheapest states
router.get("/states",(req,res)=>{
  console.log("[INFO] Get request recieved at /states");
  var results = states_price_dict;
  // res.json(results);
  res.end(JSON.stringify(results));
})

//get request for cheapest cities
router.get("/cheap-cities",(req,res)=>{
  console.log("[INFO] Get request recieved at /cheap-cities");
  var results = region_prices;
  results.sort(function(a,b){return a[1] - b[1];});
  top_ten = results.slice(0,10);
  res.end(JSON.stringify(top_ten));
})

//get request for most expsensive cities
router.get("/expensive-cities",(req,res)=>{
  console.log("[INFO] Get request recieved at /expensive-cities");
  var results = region_prices;
  results.sort(function(a,b){return b[1] - a[1];});
  top_ten = results.slice(0,10);
  res.end(JSON.stringify(top_ten));
})

//get request for most expsensive cities
router.get("/line",(req,res)=>{
  console.log("[INFO] Get request recieved at /line");
  var results = {"New York": [100, 200, 300, 400, 500, 600, 700, 800], "San Diego": [300, 500, 800, 900, 1000, 1100, 700, 800]};
  res.end(JSON.stringify(results));
})

//get request for most expsensive cities
router.get("/city-names",(req,res)=>{
  console.log("[INFO] Get request recieved at /city-names");
  var results = region_prices;
  res.end(JSON.stringify(results));
})

router.post('/addRecord', (req, res) => {
    res.end('NA');
});

module.exports = router;