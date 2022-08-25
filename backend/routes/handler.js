const express = require('express');
const router = express.Router();

const { generateJsonObj } = require("../data/csvParser.js");
full_json_data = generateJsonObj();


const {buildDataDict, buildStatesDict, buildStatesPriceDict} = require("../dbloader/load_data.js");
const data_dict = buildDataDict(full_json_data);
const states_dict = buildStatesDict(data_dict);
const states_price_dict = buildStatesPriceDict(data_dict, states_dict);

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
  var results = states_dict;  // TO DO
  // list of all cities, sorted by price 
  // go through id dict and sort on year.2021 
  // return that new sorted list 

  res.end(JSON.stringify(results));
})

router.post('/addRecord', (req, res) => {
    res.end('NA');
});

module.exports = router;