import React, { useState, useEffect } from 'react';
import Select from 'react-select';

function DropDown() {
    const [selectedRegions, setselectedRegions] = useState("");

    // useEffect(() => {
    //     fetch('http://localhost:4000/city-names')
    //         .then(response => response.json())
    //         .then((json) => {
    //             setselectedRegions(json);
    //         });
    // }, [])

    // TO DO: generate this list dynamically from dataset 
    const regions = [
        {
            value: 1,
            label: "New York"
        },
        {
            value: 2,
            label: "San Diego"
        },
        {
            value: 3,
            label: "San Jose"
        }
    ];

    var productArr = [];
    productArr.push({ ide: 1, name: "prudct-name" });
    console.log("prduct-arr", productArr);

    var handleOnChange = (e) => {
        setselectedRegions(Array.isArray(e)?e.map(x=>x.label):[]);
    };

    return (
        <div className="container mt-3">
            <div className="mt-4" style={{maxWidth: '40%'}}>
                <Select isMulti options={regions} onChange={handleOnChange} ></Select>
                <div>
                    <h4>{selectedRegions}</h4>
                </div>
                
            </div>
        </div>
    );
}

export default DropDown;