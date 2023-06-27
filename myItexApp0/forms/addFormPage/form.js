import React, { useState, useEffect } from "react";
import { TableObject } from "../../pages/productspage/table/tableinfo";
import { useNavigate } from "react-router-dom";

export default function Form({ setMsg }) {
  const [allowSubmit, setAllowSubmit] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    ratings: 0,
    stock: 0,
    brand: "",
    category: "",
    status: "",
  });

  function Change(event) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: [name] === "ratings" ? parseFloat(value) : value,
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

  function Submit(event) {
    if (
      formData.title === "" ||
      formData.price === 0 ||
      formData.ratings === 0 ||
      formData.stock === 0 ||
      formData.brand === "" ||
      formData.category === "" ||
      formData.status === ""
    ) {
      setMessage("Please fill in all fields");
    } else {
      setAllowSubmit(true);
    }
    event.preventDefault();
  }

  useEffect(() => {
    async function fetchData() {
      await TableObject.create(formData);
      const result = TableObject.status[0];
      if (result === 200) {
        setMessage("Product has been created successfully");
        setTimeout(() => {
          navigate("/Products");
        }, 3500);
      } else {
        setMessage(result);
      }
      clearFields();
      TableObject.status.pop();
    }
    if (allowSubmit) {
      fetchData();
    }
  }, [allowSubmit]);

  function clearFields() {
    setFormData((prevData) => {
      return {
        ...prevData,
        title: "",
        price: 0,
        ratings: 0,
        stock: 0,
        brand: "",
        category: "",
        status: "",
      };
    });
  }

  console.log();
  return (
    <div className="form-base">
      <form id="add-form" className="form">
        <h2>Add Product</h2>
        <div className="group">
          <label>Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter product title"
            onChange={Change}
            value={formData.title}
          />
        </div>
        <div className="group">
          <label>Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Enter product price"
            onChange={Change}
            value={formData.price === 0 ? "" : formData.price}
          />
        </div>
        <div className="group">
          <label>Ratings:</label>
          <input
            type="text"
            id="ratings"
            name="ratings"
            placeholder="Enter product ratings"
            onChange={Change}
            value={formData.ratings === 0 ? "" : formData.ratings}
          />
        </div>
        <div className="group">
          <label>Stock:</label>
          <input
            type="text"
            id="stock"
            name="stock"
            placeholder="Enter product stock"
            onChange={Change}
            value={formData.stock === 0 ? "" : formData.stock}
          />
        </div>
        <div className="group">
          <label>Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            placeholder="Enter product brand"
            onChange={Change}
            value={formData.brand}
          />
        </div>
        <div className="group">
          <label>Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            placeholder="Enter product status"
            onChange={Change}
            value={formData.status}
          />
        </div>
        <div className="group">
          <label>Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter product category"
            onChange={Change}
            value={formData.category}
          />
        </div>
        <div className="group">
          <input type="submit" value="Add Product" onClick={Submit} />
        </div>
      </form>
    </div>
  );
}
