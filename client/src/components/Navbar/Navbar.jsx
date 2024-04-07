import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '/logo.png'
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar">
      <Link to={"/"}> <img src={logo} alt="logo" width={75} className="logo"/></Link>
      <label htmlFor="menu-toggle" className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle"
        defaultChecked={showMenu}
      />
      <ul className={`nav-links ${showMenu ? "show" : ""}`}>
        <li><Link to={"/youthfest"}>YOUTHFEST</Link></li>
        <li><Link to={"/events"}>EVENTS</Link></li>
        <li><Link to={"/about-us"}>ABOUT US</Link></li>
        <li><Link to={"/contact-us"}>CONTACT-US</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
