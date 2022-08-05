import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory from "react-bootstrap-table2-editor";

function BootTable() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/table");
    const items = await data.json();
    setItems(items);
    console.log(items);
  };

  const columns = [
    {
      dataField: "ID",
      text: "Unique ID",
      sort: true,
    },
    {
      dataField: "State",
      text: "State Name",
      sort: true,
    //   validator: (newValue, row, column)=>{
    //     if(isNaN(newValue) === true) {
    //         return {
    //             valid: false,
    //             message: "Enter a number value"
    //         }
    //     }
    //     return true
    //   }
    },  // TO DO: add validators
        // TO DO: make scrollable to right 
        // TO DO: make table a component, don't take up the entire page
    { 
      dataField: "CountyName",
      text: "County Name",
    },
    {
        dataField: "2010",
        text: "2010",
    },
    {
        dataField: "2011",
        text: "2011",
    },
    {
        dataField: "2012",
        text: "2012",
    },
    {
        dataField: "2013",
        text: "2013",
    },
    {
        dataField: "2014",
        text: "2014",
    },
    {
        dataField: "2015",
        text: "2015",
    },
    {
        dataField: "2016",
        text: "2016",
    },
    {
        dataField: "2017",
        text: "2017",
    },
    {
        dataField: "2018",
        text: "2018",
    },
    {
        dataField: "2019",
        text: "2019",
    },
    {
        dataField: "2020",
        text: "2020",
    },
  ];

  return (
    <div className="App">
      {/* Rental Prices across the U.S. */}
      {/* <DataTable data={data}></DataTable> */}
      <BootstrapTable
        keyField="id"
        data={items}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory( {sizePerPage: 10} )}  //TO DO: fix overflow error 
        cellEdit={ cellEditFactory({ 
            mode: 'click',
            blurToSave: true,
        }) }
      />
    </div>
  );
}

export default BootTable;
