import React, { useState, useEffect } from "react";
import { PageInfo } from "./tableinfo";

export default function Pagination({ paige, setPage }) {
  const [pages, setPages] = useState(PageInfo);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  function select(num) {
    setPages((prevPages) => {
      const updatedPages = prevPages.map((Page) => ({
        ...Page,
        on: false,
      }));

      return updatedPages.map((Page) =>
        Page.num === num
          ? {
              ...Page,
              on: !Page.on,
            }
          : Page
      );
    });
  }

  useEffect(() => {
    pages.forEach((page) => {
      if (page.on === true) {
        setPage(page.num)
      }
    });
  }, [pages]);

  function next() {
    setStart((prevStart) => {
      if (end < 20) {
        select(paige + 1)
        return prevStart + 1;
      } else {
        return prevStart;
      }
    });

    setEnd((prevEnd) => {
      if (prevEnd < 20) {
        return prevEnd + 1;
      } else {
        return prevEnd;
      }
    });
  }

  function prev() {
    setStart((prevStart) => {
      if (prevStart > 0) {
        select(paige - 1)
        return prevStart - 1;
      } else {
        return prevStart;
      }
    });
    setEnd((prevEnd) => {
      if (start > 0) {
        return prevEnd - 1;
      } else {
        return prevEnd;
      }
    });
  }
  const pageElements = pages.slice(start, end).map((page) => (
    <span
      style={page.on ? { background: "#133B5C", color: "#fff" } : {}}
      onClick={() => select(page.num)}
      key={page.num}
    >
      {page.num}
    </span>
  ));
  return (
    <div className="pagination-container">
      <label onClick={prev}>{"< Prev"}</label>
      <div className="book">{pageElements}</div>
      <label onClick={next}>{"Next >"}</label>
    </div>
  );
}
