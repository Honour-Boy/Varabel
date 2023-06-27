import React, { useState, useEffect } from "react";
import { useData, useIndex } from "../../dataContext";
import { useNavigate } from "react-router-dom";
import { TableObject } from "../../pages/productspage/table/tableinfo";

export default function Form({ setMsg, setBool }) {
  const Data = useData();
  const Index = useIndex();
  const [form, setForm] = useState({
    title: "",
    price: 0,
    ratings: 0,
    stock: 0,
    brand: "",
    category: "",
    status: "",
  });
  const [allowSubmit, setAllowSubmit] = useState(false);
  const navigate = useNavigate();

  function Change(event) {
    const { name, value } = event.target;
    setForm((prevData) => {
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
      form.title === "" ||
      form.price === 0 ||
      form.ratings === 0 ||
      form.stock === 0 ||
      form.brand === "" ||
      form.category === "" ||
      form.status === ""
    ) {
      setMessage("Please fill in all fields");
    } else {
      setAllowSubmit(true);
    }
    event.preventDefault();
  }

  useEffect(() => {
    async function fetchData() {
      await TableObject.update(Index, form);
      const result = TableObject.status[0];
      if (result === 200) {
        setMessage("Product Updated Successfully");
        clearFields();
        setTimeout(() => {
          navigate("/Products");
        }, 3500);
      } else {
        setMessage(result);
      }
      TableObject.status.pop();
    }

    if (allowSubmit) {
      fetchData();
    }
  }, [allowSubmit]);

  useEffect(() => {
    function changeData() {
      for (let i = 0; i < Data.length; i++) {
        if (Data[i]._id === Index) {
          setForm(Data[i]);
        }
      }
    }
    if (Data !== undefined) {
      changeData();
      console.log(Index)
    }
  }, []);

  function clearFields() {
    setForm((prevData) => {
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

  return (
    <div className="form-base">
      <form id="edit-form" className="form">
        <h1>Edit Data</h1>
        <div className="group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="Etitle"
            onChange={Change}
            value={form.title}
            placeholder="Update product title"
          />
        </div>
        <div className="group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="Eprice"
            name="price"
            placeholder="Update product price"
            onChange={Change}
            value={form.price === 0 ? "" : form.price}
          />
        </div>
        <div className="group">
          <label htmlFor="rating">Ratings:</label>
          <input
            type="text"
            id="Eratings"
            name="ratings"
            placeholder="Update product ratings"
            onChange={Change}
            value={form.ratings === 0 ? "" : form.ratings}
          />
        </div>
        <div className="group">
          <label htmlFor="stock">Stock:</label>
          <input
            type="text"
            id="Estock"
            onChange={Change}
            placeholder="Update product stock"
            name="stock"
            value={form.stock === 0 ? "" : form.stock}
          />
        </div>
        <div className="group">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="Ebrand"
            name="brand"
            placeholder="Update product brand"
            onChange={Change}
            value={form.brand}
          />
        </div>
        <div className="group">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="Estatus"
            name="status"
            onChange={Change}
            placeholder="Update product status"
            value={form.status}
          />
        </div>
        <div className="group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="Ecategory"
            name="category"
            onChange={Change}
            placeholder="Update product category"
            value={form.category}
          />
        </div>
        <div className="group">
          <input type="submit" value="Edit Data" onClick={Submit} />
        </div>
      </form>
    </div>
  );
}
