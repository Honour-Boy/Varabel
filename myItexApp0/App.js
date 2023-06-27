import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/productspage/product";
import Add from "./forms/addFormPage/addPage";
import Edit from "./forms/editFormPage/editPage";
import DataProvider from "./dataContext";
import Dash from "./pages/homepage/dash";
import Login from "./pages/loginPage/login";
import SignUp from "./pages/signupPage/signup";
import Error from "./pages/errorPage/error";

export default function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign up" element={<SignUp />} />
          <Route path="/Products" element={<Product />} />
          <Route path="/EditWindow" element={<Edit />} />
          <Route path="/AddWindow" element={<Add />} />
          <Route path="/Home" element={<Dash />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}
