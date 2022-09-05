import React, { useState, useEffect } from "react";
import Select from "react-select";
import LineGraph from "../Charts/lineChart";

// should have dropdown & linechart components separated, however I didn't know how to the line chart would access the data for the selected regions
function DropdownLineChart() {
  const [regionOptions, setRegionOptions] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetch("/cities")
      .then((response) => response.json())
      .then((json) => {
        // console.log("city names ->", json);
        setRegionOptions(json);
      });
  }, []);

  var handleOnChange = (e) => {
    setSelectedRegions(Array.isArray(e) ? e.map((x) => x.label) : []);
    const selectedIDs = Array.isArray(e) ? e.map((x) => x.value) : [2];

    fetch("/display", {
      method: "POST",
      body: JSON.stringify(selectedIDs),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDisplayData(data);
      });
  };

  return (
    <div className="container mt-3">
      <div className="mt-4" style={{ width: "40%" }}>
        <Select
          isMulti
          options={regionOptions}
          onChange={handleOnChange}
          isOptionDisabled={() => selectedRegions.length >= 3}
        ></Select>
      </div>
      <div className="mt-5">{<LineGraph data={displayData} />}</div>
    </div>
  );
}

export default DropdownLineChart;
