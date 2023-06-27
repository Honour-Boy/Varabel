import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as SearchIcon } from "../../../Images/search-normal.svg";

export default function TopLbl({labels, setLabels}) {
  const [startDate, setStart] = useState();
  const [endDate, setEnd] = useState(labels[0].date);

  const handleStartDate = (event) => {
    const date = event.target.value;
    setStart(date);
    labels.forEach((label) => {
      if (label.date == date) {
        select(label.id);
      }
    });
  };

  const handleEndDate = (event) => {
    setEnd(event.target.value);
  };

  function select(id) {
    setLabels((prevLabels) => {
      const updatedLabels = prevLabels.map((label) => ({
        ...label,
        on: false,
      }));
      return updatedLabels.map((label) =>
        label.id === id
          ? {
              ...label,
              on: !label.on,
            }
          : label
      );
    });
  }

  useEffect(() => {
    labels.forEach((label) => {
      if (label.on === true) {
        setStart(label.date);
      }
    });
  }, [labels])

  const styleSpan = {
    padding: "5px 10px",
    background: "#ffffff",
    boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.08)",
    borderRadius: "5px",
    transition: "all 0.5s ease-out",
  };

  const styleLabel = {
    fontWeight: "700",
    color: "#000",
    transition: "all 0.9s ease-out",
  };

  const labelElement = labels.map((label) => (
    <span style={label.on ? styleSpan : {}} onClick={() => select(label.id)}>
      <label style={label.on ? styleLabel : {}}>{label.label}</label>
    </span>
  ));

  return (
    <div className="top-label-container">
      <div className="dayLabels">{labelElement}</div>
      <div className="period-button-label">
        <input type="date" value={startDate} onChange={handleStartDate} />
        <label>To</label>
        <input type="date" value={endDate} onChange={handleEndDate} />
        <button>
          <SearchIcon />
          Filter
        </button>
        <button>Clear</button>
      </div>
    </div>
  );
}
