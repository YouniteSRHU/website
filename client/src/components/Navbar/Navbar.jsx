import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '/logo.png'
import srhulogo from '/srhulogo.png'
import Sidebar from '../sidebar/Sidebar'
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <Link to={"/"}> <img src={logo} alt="logo" width={75} className="logo"/></Link>
      <Link to={"/"}> <img src={srhulogo} alt="logo"  className="srhulogo"/></Link>
      <ul className={`nav-links ${showMenu ? "show" : ""}`}>
        <li><Link to={"/YOUTHFEST"}>YOUTHFEST</Link></li>
        <li><Link to={"/ABOUT-US"}>ABOUT US</Link></li>
        <li><Link to={"/CONTACT-US"}>CONTACT-US</Link></li>
      </ul>
      <Sidebar showMenu={showMenu}/>
    </nav>
  );
};

export default Navbar;
