import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Contact } from "../../Images/contact.svg";
import { ReactComponent as Note } from "../../Images/note.svg";
import { ReactComponent as Check } from "../../Images/check.svg";
import { ReactComponent as Fail } from "../../Images/fail.svg";
import { ReactComponent as Export } from "../../Images/export.svg";
import { ReactComponent as Search } from "../../Images/search-normal.svg";
import { ReactComponent as Add } from "../../Images/add.svg";
import { ReactComponent as Naira } from "../../Images/Vector.svg";

export default function Status({ searchText, setSearchText }) {
  const [infos, setInfo] = useState([
    {
      id: 1,
      img: <Contact />,
      amount: 1283000,
      detail: "1,283,000 active customers",
    },
    {
      id: 2,
      img: <Note />,
      amount: 13000000,
      detail: "10,000 total transactions",
    },
    {
      id: 3,
      img: <Check />,
      amount: 11907020,
      detail: "9,160 successful transactions",
    },
    {
      id: 4,
      img: <Fail />,
      amount: 1092980,
      detail: "840 failed transactions",
    },
  ]);

  function handleSearch(event){
    const { value } = event.target;
    setSearchText(value);
  }

  const statusElement = infos.map((info) => (
    <div className="transaction" key={info.id}>
      {info.img}
      <div>
        <h3>
          {info !== infos[0] && <Naira />}
          {info.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h3>
        <label>{info.detail}</label>
      </div>
    </div>
  ));

  return (
    <div className="mcash-container">
      <div className="status-container">{statusElement}</div>
      <div className="mcash-labels">
        <div className="noname">
          <div className="search">
            <Search />
            <input
              type="text"
              value={searchText}
              onChange={handleSearch}
              placeholder="Search title, price, ratings, stock, brand, status etc"
            />
          </div>
        </div>
        <div className="button-containers">
          <Link to="/AddWindow">
            <div className="button">
              <Add />
              <label>Add User</label>
            </div>
          </Link>
          <div className="button">
            <Export />
            <label>Export</label>
          </div>
        </div>
      </div>
    </div>
  );
}
