// build main data dict, keys are IDs, value = record itself (json obj)
function buildDataDict(json){
    var data = {};

    for (let i=0; i< json.length; i++){
        var record = json[i]
        data[record.ID] = record;
    }

    return data
}

function buildStatesDict(data_map){
    var states = {};

    data_map.forEach((value, key) => {
        var state = value.State;
        states[state] = states[state] || [];
        states[state].push(key)
    });

    return states
}

module.exports = {
    buildDataDict: buildDataDict
}