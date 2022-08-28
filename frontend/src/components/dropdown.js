import React, { useState, useEffect } from "react";
import Select from "react-select";
import LineGraph from "../Charts/lineChart";

function DropDown() {
  const [regionOptions, setRegionOptions] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/cities")
      .then((response) => response.json())
      .then((json) => {
        // console.log("city names ->", json);
        setRegionOptions(json);
      });
  }, []);

  var handleOnChange = (e) => {
    console.log("handling change", e);
    setSelectedRegions(Array.isArray(e) ? e.map((x) => x.label) : []);

    const selectedIDs = Array.isArray(e) ? e.map((x) => x.value) : [2];
    console.log("selected ids 2", selectedIDs);
    fetch("http://localhost:4000/display", {
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
        console.log("-in fetch response", displayData);
      });
  };

  return (
    <div className="container mt-3">
        <div className="mt-4" style={{width: '40%'}}>
            <Select
            isMulti
            options={regionOptions}
            onChange={handleOnChange}
            isOptionDisabled={() => selectedRegions.length >= 3}
            ></Select>
        </div>
        <div class="mt-5">{<LineGraph data={displayData} />}</div>
    </div>
  );
}

export default DropDown;
