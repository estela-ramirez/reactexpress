import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
const { SearchBar } = Search;

function BootTable() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/api");
    const items = await data.json();
    setItems(items);
    console.log("items = ", items);

  };

  const columns = [
    {
      dataField: "RegionID",
      text: "Region ID",
    },
    {
      dataField: "RegionName",
      text: "Region Name",
    },
    {
      dataField: "State",
      text: "State Name",
    },
    {
      dataField: "SizeRank",
      text: "Population Rank",
      sort: true,
    },
    {
      dataField: "year2014",
      text: "2014",
    },
    {
      dataField: "year2015",
      text: "2015",
    },
    {
      dataField: "year2016",
      text: "2016",
    },
    {
      dataField: "year2017",
      text: "2017",
    },
    {
      dataField: "year2018",
      text: "2018",
    },
    {
      dataField: "year2019",
      text: "2019",
    },
    {
      dataField: "year2020",
      text: "2020",
    },
    {
      dataField: "year2021",
      text: "2021",
    },
  ];

  return (
    <div className="App">
      <ToolkitProvider
        bootstrap4
        keyField="name"
        data={items}
        columns={columns}
        search
      >
        {(props) => (
          <div>
            <SearchBar 
              {...props.searchProps}
              style={{ width: "400px", height: "40px" }}
            />
            <BootstrapTable 
              keyField="id"
              data={items}
              columns={columns}
              {...props.baseProps}  // needed to display search results
              noDataIndication="There macthing data"
              striped
              hover
              condensed
              pagination={paginationFactory({ sizePerPage: 10 })}
            />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
}

export default BootTable;
