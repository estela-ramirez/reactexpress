import React, { useState, useEffect } from "react";
import Select from "react-select";

function DropDown() {
  const [regionNames, setRegionNames] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/city-names")
      .then((response) => response.json())
      .then((json) => {
        setRegionNames(json);

        let temp = [];
        let count = 1;
        for (let i = 0; i < json.length; i++){
            temp.push({ value: count++, label: json[i] });
        }
        // console.log("temp = ", temp);
        setRegionNames(temp);
      });
  }, []);


  var handleOnChange = (e) => {
    setSelectedRegions(Array.isArray(e) ? e.map((x) => x.label) : []);

  };

  return (
    <div className="container mt-3">
      <div className="mt-4" style={{ maxWidth: "40%" }}>
        <Select isMulti options={regionNames} onChange={handleOnChange} isOptionDisabled={() => selectedRegions.length >= 3}></Select>
        <div>
          <h4>{selectedRegions}</h4>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
