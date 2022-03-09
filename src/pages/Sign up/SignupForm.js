import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import "../Root.css";

const SignupForm = ({ setSignUp }) => {
  return (
    <>
      <form className="container">
        <img src={Logo} alt="Logo" />
        <h1>Sign up</h1>
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={() => setSignUp()}>Sign up</button>

        <button>Continue with Google</button>
        <button>Continue with KakaoTalk</button>
      </form>
    </>
  );
};

export default SignupForm;
