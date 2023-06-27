import React, { useState, useEffect } from "react";
import Navbar from "../../components/navInfo/navbar";
import Top from "./topInfo";
import Status from "./status";
import "./product.css";
import Table from "./table/tabledisplay";
import Pagination from "./table/pagination";

export default function Product() {
  const [show, setShow] = useState(false);
  const [bool, setBool] = useState(false);
  const [paige, setPage] = useState(1);
  const [deleteIndexes, setDeleteIndexes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const bodybrightness = show
    ? {
        filter: "brightness(70%)",
      }
    : {
        filter: "brightness(100%)",
      };

  return (
    <div className="dash-body">
      <Navbar show={show} setShow={setShow} word="Products" />
      <div className="dash-content" style={bodybrightness}>
        <Top
          Head="Products Page"
          details="Retail Products information for customers"
          bool={bool}
          deleteIndexes={deleteIndexes}
        />
        <Status searchText={searchText} setSearchText={setSearchText} />
        <div className="table-containers">
          <Table
            page = {paige}
            setBool={setBool}
            deleteIndexes={deleteIndexes}
            setDeleteIndexes={setDeleteIndexes}
            searchText={searchText}
          />
        </div>
        <div className="page">
          <Pagination paige={paige} setPage={setPage}/>
        </div>
      </div>
    </div>
  );
}
