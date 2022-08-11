// build main data dict, keys are IDs, value = record itself (json obj)
function buildDataDict(json){
    var data = new Map();

    for (let i=0; i< json.length; i++){
        var record = json[i]
        data[record.ID] = record;
    }

    return data
}

// takes in mpa, where keys are ID's, and value is record
function buildStatesDict(data_map){
    var states = new Map();

    data_map.forEach((value, key) => {
        var state = value.State;
        states[state] = states[state] || [];
        states[state].push(key)
    });

    return states
}

module.exports = {
    buildDataDict: buildDataDict,
    buildStatesDict: buildStatesDict
}