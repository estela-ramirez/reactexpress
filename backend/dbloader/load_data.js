console.log = function () {};

// build main data dict, keys are IDs, value = record itself (json obj)
function buildDataDict(json) {
  var data = new Map();

  for (let i = 0; i < json.length; i++) {
    var record = json[i];
    data[record.RegionID] = record;
  }

  return data;
}

function buildDataMap(json) {
  var data_map = new Map();

  for (let i = 0; i < json.length; i++) {
    var record = json[i];
    // console.log(record);
    data_map[record.RegionID] = record;
  }

  return data_map;
}

// takes in map, where keys are ID's, and value is record
// build map where key = state acronym,
// value = list of [IDs, price for year2021] for each record that belongs in that state
function buildStatesDict(data_map) {
  var states = new Map();

  Object.keys(data_map).map((key) => {
    var state = data_map[key].State;
    states[state] = states[state] || [];
    states[state].push(key);
  });

  return states;
}

function buildStatesPriceDict(main_dict, states_data_map) {
  var states_prices = new Map();

  Object.keys(states_data_map).map((key) => {
    var total = 0;
    var records = states_data_map[key];
    var num_records = records.length;
    for (let i = 0; i < num_records; i++) {
      record = records[i];
      price = main_dict[record].year2021;
      total += price;
    }
    states_prices[key] = Math.round(total / num_records);
  });

  return states_prices;
}

function buildRegionPriceList(main_dict) {
  var regions = [];

  Object.keys(main_dict).map((key) => {
    regions.push([main_dict[key].RegionName, main_dict[key].year2021]);
  });
  return regions;
}


module.exports = {
  buildDataDict: buildDataDict,
  buildStatesDict: buildStatesDict,
  buildStatesPriceDict: buildStatesPriceDict,
  buildRegionPriceList: buildRegionPriceList,
  buildDataMap: buildDataMap,
};
