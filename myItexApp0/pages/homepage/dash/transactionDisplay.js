import React, { useState } from "react";
import { ReactComponent as Naira } from "../../../Images/Vector.svg";

export default function DisplayTransaction({title, name, month, total, success, countS, countF, compared}) {
  return (
    <div className="container">
      <div className="first-div">
        {name} <label>{month}</label>
      </div>
      <div className="second-div">
        <h4>Total Transactions</h4>
        <h3>
          <Naira />
          {total.toLocaleString('en-US')}
        </h3>
        <label>Total Count</label>
        <div className="inside-div">
          <div className="success-div">
            <h4>Successful Transactions</h4>
            <h3>
              <Naira />
              {(Math.round((success/100) * total)).toLocaleString('en-US')}
            </h3>
            <label>Count: {countS.toLocaleString('en-US')}</label>
            <span>{success}% success rate</span>
          </div>
          <div className="mid-div">
            <span></span>Vs.
          </div>
          <div className="fail-div">
            <h4>Unsuccessful Transactions</h4>
            <h3>
              <Naira />
              {(Math.round(((100-success)/100) * total)).toLocaleString('en-US')}
            </h3>
            <label>Count: {countF.toLocaleString('en-US')}</label>
            <span>{100-success}% failure rate</span>
          </div>
        </div>
        <div className="last-div">
          <h4>Compared to previous {title}</h4>
          <label>{compared}%</label>
        </div>
      </div>
    </div>
  );
}
