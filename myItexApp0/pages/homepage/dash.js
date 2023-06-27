import React, { useState, useEffect } from "react";
import Navbar from "../../components/navInfo/navbar"
import Top from "../productspage/topInfo";
import TopLbl from "./dash/topLabel";
import DisplayTransaction from "./dash/transactionDisplay";
import labelInfo from "./dash/labelInfo";
import "../productspage/product.css";

export default function Dash() {
  const [show, setShow] = useState(false);
  const [labels, setLabels] = useState(labelInfo);
  const [val, setVal] = useState("Today");
  const bodybrightness = show
    ? {
        filter: "brightness(70%)",
      }
    : {
        filter: "brightness(100%)",
      };

  const time = {
    Today: {
      name: "Day",
      total: 2879987,
      success: 96,
      countS: 65807,
      countF: 4921,
      compared: -20,
    },
    Day7:{
      name: "Week",
      total: 15879987,
      success:94,
      countS: 245807,
      countF: 24921,
      compared: -14,
    },
    Day30:{
      name: "Month",
      total: 22879987,
      success:90,
      countS: 745807,
      countF: 94621,
      compared: -9,
    },
    Year:{
      name: "Year",
      total: 422879987,
      success:95,
      countS: 1245807,
      countF: 254921,
      compared: -1,
    }
  }

  useEffect(() => {
    labels.forEach((label) => {
      if (label.on === true) {
        setVal(label.name)
      }
    });
  }, [labels])


  return (
    <div className="dash-body">
      <Navbar show={show} setShow={setShow} word="Home" />
      <div className="dash-content" style={bodybrightness}>
        <Top 
          Head="Home Page"
          details=""
        />
        <TopLbl 
          labels={labels}
          setLabels={setLabels}
        />
        <div className="display-containers">
          <DisplayTransaction
            name={`Current ${time[val].name}`}
            title={time[val].name}
            month="05-2023"
            total= {time[val].total}
            success={time[val].success}
            countS={time[val].countS}
            countF={time[val].countF}
            compared={time[val].compared}
          />
          <DisplayTransaction 
            name={`Previous ${time[val].name}`}
            title={time[val].name}
            month="04-2023"
            total= {time[val].total - 50000}
            success={time[val].success - 2}
            countS={time[val].countS - 1000}
            countF={time[val].countF - 1000}
            compared={time[val].compared - 2}
          />
        </div>
      </div>
    </div>
  );
}
