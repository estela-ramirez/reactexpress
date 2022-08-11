const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');  // include routes


const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);
// so server can parse through incoming json & limit amount per request
app.use(express.json({limit: '1mb'}));  

const PORT = 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});