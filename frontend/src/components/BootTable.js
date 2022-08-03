import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function BootTable() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/table");
    const items = await data.json();
    setItems(items);
  };

  const columns = [
    {
      dataField: "userId",
      text: "Artist ID",
      sort: true
    },
    {
      dataField: "id",
      text: "Album Number",
      sort: true
    },
    {
      dataField: "title",
      text: "Album Title"
    }
  ];

  return (
    <div className="App">
      Rental Prices across the U.S.
      <BootstrapTable
        keyField="userId"
        data={items}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory()}
      />
    </div>
  );
}

export default BootTable;
