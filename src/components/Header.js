import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";
import "../pages/Root.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/sign-up">
          Sign up
        </a>
        <a className="menu-item" href="/about-us">
          About Us
        </a>
      </Menu>
    </>
  );
};

export default Header;
