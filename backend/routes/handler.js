const express = require('express');
const router = express.Router();

const { generateJsonObj } = require("../data/csvParser.js");
full_json_data = generateJsonObj();
console.log(full_json_data);

const {buildDataDict, buildStatesDict} = require("../dbloader/load_data.js");
data_dict = buildDataDict(full_json_data);
states_dict = buildStatesDict(data_dict);

router.get('/api', (req, res) => {
  console.log("[INFO] Get request recieved at /api");
  // query it before sending it back!
    json =  full_json_data;
    res.end(JSON.stringify(json));
});

// cs180 table route
// router.post("/api", (req, res)=>{ 
//   var results = queryDB(req.body);
//   res.json(results);
// })

// Feature 1 get request for cheapest cities
router.get("/cheapest",(req,res)=>{
  console.log("[INFO] Get request recieved at /cheapest");
  // const results = MostAccStates();
  // var results = Result.cache.getResult('/mostaccstates');
  // res.json(results);
  res.send("success cheapest")
})

router.post('/addRecord', (req, res) => {
    res.end('NA');
});

module.exports = router;