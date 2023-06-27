import React, { useState } from "react";
import Form from "./loginComp/Form";
import SideDesign from "./loginComp/sideDesign";
import "./login.css";
import Alert from "../../components/alertWindow";
export default function Login() {
  const [message, setMessage] = useState({
    value: "",
    show: false,
  });
  return (
    <div className="login-body">
      <Form setMsg={setMessage} />
      <SideDesign />
      <Alert msg={message} />
    </div>
  );
}
