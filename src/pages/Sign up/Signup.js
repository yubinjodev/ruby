import { useState, useEffect } from "react";

import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

const Signup = () => {
  const [signUp, setSignUp] = useState(false);
  console.log(signUp);

  useEffect(() => {
    const item = localStorage.getItem("signUp");
    item && JSON.parse(item) ? setSignUp(true) : setSignUp(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("signUp", signUp);
  }, [signUp]);

  return (
    <>
      {signUp ? (
        <ProfileForm setSignUp={() => setSignUp(false)} />
      ) : (
        <SignupForm setSignUp={() => setSignUp(true)} />
      )}
    </>
  );
};

export default Signup;
