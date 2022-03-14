import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <img src={Logo} alt="Logo" />
      <h1>Login</h1>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button onClick={() => navigate("/dashboard")}>Login</button>
      <div onClick={() => navigate("/sign-up")}>
        Don't have an account yet? Sign up here
      </div>
    </div>
  );
};

export default Login;
