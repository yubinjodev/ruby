import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Logo from "../../assets/images/Logo.png";

import "../Root.css";

const SignupForm = ({ setCurrentForm }) => {
  const navigate = useNavigate();

  const [signupForm, setSignUpForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = signupForm;

  const handleChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;

    setSignUpForm({
      ...signupForm,
      [name]: value,
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    toast.success("Signed up!");

    setSignUpForm({
      email: "",
      password: "",
    });

    setCurrentForm();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     // ...
    //     toast.success("dsf");
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
  };

  return (
    <>
      <ToastContainer />
      <form className="container">
        <img src={Logo} alt="Logo" />
        <h1>Sign up</h1>
        <input
          onChange={handleChange}
          name="email"
          value={email}
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          name="password"
          value={password}
          type="password"
          placeholder="Password"
        />
        <button onClick={handleSignUp}>Sign up</button>

        <button>Continue with Google</button>
        <button>Continue with KakaoTalk</button>
      </form>
    </>
  );
};

export default SignupForm;
