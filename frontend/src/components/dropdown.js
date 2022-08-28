import React, { useState, useEffect } from "react";
import Select from "react-select";
import LineGraph from '../Charts/lineChart';

function DropDown() {
  const [regionNames, setRegionNames] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedIDs, setSelectedIDs] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/cities")
      .then((response) => response.json())
      .then((json) => {
        // console.log("city names ->", json);
        setRegionNames(json);
      });
  }, []);


  var handleOnChange = (e) => {
    console.log("handling change");
    setSelectedRegions(Array.isArray(e) ? e.map((x) => x.label): ["test"]);
    setSelectedIDs(Array.isArray(e) ? e.map((x) => x.value) : [2]);
    
    console.log("here handling change", selectedRegions);
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
      <div className="mt-4" >
        <Select isMulti options={regionNames} onChange={handleOnChange} isOptionDisabled={() => selectedRegions.length >= 3}></Select>
        <div>
          <h4>{selectedRegions}</h4>
        </div>
        <div class="mt-5">
                {<LineGraph data={displayData}/>}
            </div>
      </div>
    </div>
  );
}

export default DropDown;
