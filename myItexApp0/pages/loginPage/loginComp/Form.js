import React, { useState, useEffect } from "react";
import { FormApi } from "../../../components/formApi";
import { useNavigate } from "react-router-dom";

export default function Form({ setMsg }) {
  const [formData, setFormData] = useState({
    email: "example@gmail.com",
    password: "Example123",
  });
  const [formCheck, setFormCheck] = useState([]);
  const navigate = useNavigate();

  function Change(event) {
    setFormData((prevFormData) => {
      const { name, value } = event.target;
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    async function fetchLoginData() {
      const result = await FormApi.read();
      setFormCheck(result);
      console.log(result);
    }

    fetchLoginData();
  }, []);

  function Submit(event) {
    event.preventDefault();
    for (let i = 0; i < formCheck.length; i++) {
      if (
        formData.email === formCheck[i].Email &&
        formData.password === formCheck[i].Password
      ) {
        setMessage("Login Successful");
        setTimeout(() => {
          navigate("/Home", { replace: true });
        }, 3500);
        break
      } else {
        setMessage("Login Failed");
      }
    }
    clearFields();
  }

  function clearFields() {
    setFormData((prevData) => {
      return {
        ...prevData,
        username: "",
        password: "",
      };
    });
  }

  function setMessage(value, time = 3000) {
    setMsg((prevMsg) => {
      return {
        ...prevMsg,
        value: value,
        show: true,
      };
    });
  
    return new Promise((resolve) => {
      setTimeout(() => {
        setMsg((prevMsg) => {
          return {
            ...prevMsg,
            value: "",
            show: false,
          };
        });
        resolve();
      }, time);
    });
  }
  
  useEffect(() => {
    async function displayMessages() {
      await setMessage("Just click the login button.", 1000);
    }
  
    displayMessages();
  }, []);
  

  return (
    <form onSubmit={Submit}>
      <div className="headings">
        <h1>Welcome Back!</h1>
        <p>Login to access your Dashboard</p>
      </div>
      <label>Email</label>
      <input
        type="text"
        placeholder="Enter Email"
        className="txt-inp"
        onChange={Change}
        name="email"
        value={formData.email}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter Password"
        className="txt-inp"
        onChange={Change}
        name="password"
        value={formData.password}
      />
      <button>Login</button>
      <a href="/Sign up">Don't have an account. Sign up?</a>
    </form>
  );
}
