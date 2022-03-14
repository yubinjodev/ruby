import { useState, useEffect } from "react";

import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

const Signup = () => {
  const [currentForm, setCurrentForm] = useState("signUp");

  useEffect(() => {
    const item = localStorage.getItem("currentForm");
    item && JSON.parse(item)
      ? setCurrentForm("signUp")
      : setCurrentForm("profile");
  }, []);

  useEffect(() => {
    localStorage.setItem("currentForm", currentForm);
  }, [currentForm]);

  return (
    <>
      {currentForm === "signUp" ? (
        <SignupForm setCurrentForm={() => setCurrentForm("profile")} />
      ) : (
        <ProfileForm setCurrentForm={() => setCurrentForm("signUp")} />
      )}
    </>
  );
};

export default Signup;
