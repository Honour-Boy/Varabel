import React, { useState } from "react";
import "../../App.css";
import "../../pages/productspage/product.css"
import Navbar from "../../components/navInfo/navbar";
import Top from "../../pages/productspage/topInfo";
import Form from "./form";
import Alert from "../../components/alertWindow";

export default function Add() {
  const [show, setShow] = useState(false);

  const bodybrightness = show
    ? {
        filter: "brightness(70%)",
      }
    : {
        filter: "brightness(100%)",
      };

  const [message, setMessage] = useState({
    value: "",
    show: false,
  });

  const [bool, setBool] = useState(false);

  return (
    <div className="dash-body">
      <Navbar show={show} setShow={setShow} />
      <div className="dash-content" style={bodybrightness}>
        <Top
          Head=""
          details=""
        />
        <div className="container">
          <Form 
            msg={message}
            setMsg={setMessage}
            setBool={setBool}
          />
        </div>
        <Alert 
          msg={message}
        />
      </div>
    </div>
  );
}
