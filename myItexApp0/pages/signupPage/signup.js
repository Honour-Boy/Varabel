import React, { useState } from "react";
import Form from "./Form";
import "../loginPage/login.css";
import Alert from "../../components/alertWindow";
export default function SignUp() {
  const [message, setMessage] = useState({
    value: "",
    show: false,
  });
  return (
    <div className="login-body">
      <Form setMsg={setMessage} />
      <Alert msg={message} />
    </div>
  );
}
