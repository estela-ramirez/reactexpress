// require csvtojson module
const csvToJson = require('convert-csv-to-json');

function generateJsonObj(){''
    console.log("creating json object..");
    let json = csvToJson.formatValueByType().fieldDelimiter(',').getJsonFromCsv('./data/condensed.csv');
    console.log('csv to json');
    for (let i=0; i< 2; i++){
        console.log(json[i])
    }
    return json;
}

module.exports = {
    generateJsonObj : generateJsonObj
}