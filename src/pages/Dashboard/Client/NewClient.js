import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserIcon from "../../../assets/images/UserIcon.svg";

const NewClient = () => {
  const navigate = useNavigate();
  const [clientForm, setClientForm] = useState({
    name: "",
    phone: "",
    registeredDate: "",
  });

  const { name, phone, registeredDate } = clientForm;

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    setClientForm({
      ...clientForm,
      [name]: value,
    });
  };

  const createNewClient = async (e) => {
    e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.
    const client = { ...clientForm };
    await fetch("http://localhost:8000/client/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setClientForm({ name: "", phone: "", registeredDate: "" });

    toast.success("Client registered", { autoClose: 2000 });
  };

  return (
    <>
      <div onClick={() => navigate("/dashboard")}>go back to dashboard</div>
      <div className="container">
        <ToastContainer />
        <img className="client-icon" src={UserIcon} alt="user icon" />
        <input
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <input
          name="registeredDate"
          value={registeredDate}
          onChange={handleChange}
          placeholder="Registered Date"
        />
        <button onClick={createNewClient}>Create New Client</button>
      </div>
    </>
  );
};

export default NewClient;
