const express = require('express');
const router = express.Router();

router.get('/table', (req, res) => {
    const str = [
        {
          "ID": 1,
          "State": "CA",
          "CountyName": "Santa Barbara County",
          "2010": "1000",
          "2011": "2000",
          "2012": "3000", 
          "2013": "4000",
          "2014": "5000",
          "2015": "6000",
          "2016": "7000", 
          "2017": "8000",
          "2018": "9000",
          "2019": "10000",
          "2020": "11000"
        },
        {
          "ID": 2,
          "State": "OR",
          "CountyName": "Santa Oregon County",
          "2010": "1002",
          "2011": "2002",
          "2012": "3002", 
          "2013": "4002",
          "2014": "5002",
          "2015": "6002",
          "2016": "7002", 
          "2017": "8002",
          "2018": "9002",
          "2019": "10002",
          "2020": "11002"
        },
        {
          "ID": 3,
          "State": "TX",
          "CountyName": "Santa Texas County",
          "2010": "1003",
          "2011": "2003",
          "2012": "3003", 
          "2013": "4003",
          "2014": "5003",
          "2015": "6003",
          "2016": "7003", 
          "2017": "8003",
          "2018": "9003",
          "2019": "10003",
          "2020": "11003"
        },
      ];
    res.end(JSON.stringify(str));
});

router.post('/addEntry', (req, res) => {
    res.end('NA');
});

module.exports = router;