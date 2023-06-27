import React, { useState, useEffect } from "react";
import { FormApi } from "../../components/formApi";
import { useNavigate } from "react-router-dom";

export default function Form({ setMsg }) {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [enable, setEnable] = useState(false);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const navigate = useNavigate();

  function Change(event) {
    setFormData((prevFormData) => {
      const { name, value } = event.target;
      return {
        ...prevFormData,
        [name]: value,
      };
    });
    setData((prevData) => {
      const { name, value } = event.target;
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    async function submitData() {
      await FormApi.create(formData);
      const result = FormApi.Array[0];
      if (result === 200) {
        setMessage("Sign Up successfully");
        setTimeout(() => {
          navigate("/Login", { replace: true });
        }, 3500);
      } else {
        console.log(result);
        console.log(data);
        // setMessage(/*"Sorry couldn't sign up."*/result);
      }
      clearFields();
      FormApi.Array.pop();
    }
    if (allowSubmit) {
      submitData();
    }
  }, [allowSubmit]);

  function Submit(event) {
    event.preventDefault();
    if (
      formData.Email !== "" &&
      data.username !== "" &&
      data.password !== "" &&
      formData.Password !== ""
    ) {
      setAllowSubmit(true);
    } else {
      setMessage("Please fill all the fields.");
    }
  }

  function clearFields() {
    setFormData((prevData) => {
      return {
        ...prevData,
        username: "",
        email: "",
        password: "",
        Cpassword: "",
      };
    });
  }

  function setMessage(value) {
    setMsg((prevMsg) => {
      return {
        ...prevMsg,
        value: value,
        show: true,
      };
    });
    setTimeout(() => {
      setMsg((prevMsg) => {
        return {
          ...prevMsg,
          value: "",
          show: false,
        };
      });
    }, 3000);
  }

  useEffect(() => {
    if (formData.Password === data.password) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [formData]);

  return (
    <form>
      <div className="headings">
        <h1>Sign Up!</h1>
        <p>Sign up to access the website</p>
      </div>
      <label>Username</label>
      <input
        type="text"
        placeholder="Enter Username"
        className="txt-inp"
        onChange={Change}
        name="username"
        value={data.username}
      />
      <label>Email</label>
      <input
        type="text"
        placeholder="Enter Email"
        className="txt-inp"
        onChange={Change}
        name="Email"
        value={formData.Email}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter a Password"
        className="txt-inp"
        onChange={Change}
        name="Password"
        value={formData.Password}
      />
      <label>Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm the above Password"
        className="txt-inp"
        onChange={Change}
        name="password"
        value={data.password}
      />
      {enable === false && (
        <span style={{ color: "red" }}>Password does not match</span>
      )}
      <button disabled={!enable} onClick={Submit}>
        Sign up
      </button>
    </form>
  );
}
