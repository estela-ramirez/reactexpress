// build main data dict, keys are IDs, value = record itself (json obj)
function buildDataDict(json){
    var data = new Map();
    
    for (let i=0; i< json.length; i++){
        var record = json[i]
        data[record.RegionID] = record;
    }

    return data
}

// takes in map, where keys are ID's, and value is record
// build map where key = state acronym, 
// value = list of [IDs, price for year2021] for each record that belongs in that state
function buildStatesDict(data_map){
    var states = new Map();

    Object.keys(data_map).map(key => {
        var state = data_map[key].State;
        states[state] = states[state] || [];
        states[state].push(key);
    });

    return states
}

module.exports = {
    buildDataDict: buildDataDict,
    buildStatesDict: buildStatesDict
}