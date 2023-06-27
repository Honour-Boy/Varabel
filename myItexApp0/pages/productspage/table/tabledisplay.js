import React, { useState, useEffect } from "react";
import { ReactComponent as NoDisplay } from "../../../Images/noDisplay.svg";
import { TableObject } from "./tableinfo";
import { useNavigate } from "react-router-dom";
import { useSetData, useSetIndex } from "../../../dataContext";

export default function Table({
  page,
  setBool,
  deleteIndexes,
  setDeleteIndexes,
  searchText,
}) {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [pageStart, setPageStart] = useState();
  const [tempData, setTempData] = useState([]);
  const setData = useSetData();
  const setIndex = useSetIndex();

  useEffect(() => {
    async function fetchData() {
      const result = await TableObject.readPage(page);
      setTableData(result);
      setPageStart(page * 10 - 10);
    }

    fetchData();
  }, [page]);

  useEffect(() => {
    function showSearchedData() {
      setSearchedData(
        tableData.filter((item) =>
          Object.values(item).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(searchText.toLowerCase())
          )
        )
      );
    }

    if (searchText !== "") {
      showSearchedData();
    }
  }, [searchText]);

  function handleEdit(event) {
    if (event.target.value === "Edit") {
      navigate("/EditWindow");
      setData(tempData);
      const row = event.target.closest("tr");
      setIndex(row.id);
    }
  }

  function handleCheckBox(event) {
    const row = event.target.closest("tr");
    if (event.target.checked === true) {
      deleteIndexes.push(row.id);
      setBool(true);
    } else if (event.target.checked === false) {
      setDeleteIndexes(deleteIndexes.filter((index) => index !== row.id));
    }
  }

  useEffect(() => {
    if (deleteIndexes.length === 0) {
      setBool(false);
    }
  }, [handleCheckBox]);

  let index = pageStart;

  const dataDisplay = searchText === "" ? tableData : searchedData;

  const tableElement = dataDisplay.map((data) => {
    const CreatedAt = data.created_at.slice(0, 10);
    index = index + 1;
    tempData.push(data);
    return (
      <tr className="transaction" key={data._id} id={data._id}>
        <td>
          <input type="checkbox" onChange={handleCheckBox} />
        </td>
        <td>{index}</td>
        <td>{data.title}</td>
        <td>{data.price}</td>
        <td>{data.ratings}</td>
        <td>{data.stock}</td>
        <td>{data.brand}</td>
        <td>{data.status}</td>
        <td>{data.category === "" ? "-" : data.category}</td>
        <td>{CreatedAt}</td>
        <td>
          <select onChange={handleEdit}>
            <option>--Select--</option>
            <option value="Edit">Edit</option>
          </select>
        </td>
      </tr>
    );
  });

  const ErrorElement = (
    <tr className="table-error">
      <td>
        <NoDisplay />
        <label>No Product to Display</label>
      </td>
    </tr>
  );

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>S/N</th>
          <th>Title</th>
          <th>Price</th>
          <th>Ratings</th>
          <th>Stock</th>
          <th>Brand</th>
          <th>Status</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{tableData.length === 0 ? ErrorElement : tableElement}</tbody>
    </table>
  );
}
