import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";
import "../pages/Root.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Menu>
      <a className="menu-item" href="/">
        Sign out
      </a>
    </Menu>
  );
};

export default Header;
