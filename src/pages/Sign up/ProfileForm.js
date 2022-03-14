import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "../Root.css";

const Profile = ({ setCurrentForm }) => {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => setCurrentForm()}>go back to sign up</div>
      <form className="container">
        <img src={Logo} alt="Logo" />
        <h1>Profile</h1>
        <input placeholder="Name" />
        <input placeholder="Position" />
        <input placeholder="Branch" />
        <button onClick={() => navigate("/dashboard")}>Sign up!</button>
      </form>
    </>
  );
};

export default Profile;
