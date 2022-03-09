import React from "react";
import UserIcon from "../../../assets/images/UserIcon.svg";

const NewClient = () => {
  return (
    <div className="container">
      <img className="client-icon" src={UserIcon} />
      <input placeholder="Name" />
      <input placeholder="Phone" />
      <input placeholder="Registered Date" />
      <button>Create New Client</button>
    </div>
  );
};

export default NewClient;
