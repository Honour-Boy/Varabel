import React, { createContext, useState, useContext } from "react";

const dataContext = createContext();
const setDataContext = createContext();
const indexContext = createContext();
const setIndexContext = createContext();

export function useData() {
  return useContext(dataContext);
}
export function useSetData() {
  return useContext(setDataContext);
}
export function useIndex() {
  return useContext(indexContext);
}
export function useSetIndex() {
  return useContext(setIndexContext);
}

export default function DataProvider({ children }) {
  const [data, setData] = useState();
  const [index, setIndex] = useState();
  function handleData(val) {
    setData(val);
  }

  function handleIndex(num) {
    setIndex(num);
  }

  return (
    <dataContext.Provider value={data}>
      <setDataContext.Provider value={handleData}>
        <indexContext.Provider value={index}>
          <setIndexContext.Provider value={handleIndex}>
            {children}
          </setIndexContext.Provider>
        </indexContext.Provider>
      </setDataContext.Provider>
    </dataContext.Provider>
  );
}
