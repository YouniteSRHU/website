import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><Link to={"/"}>YOUNITE</Link></div>
      <ul className="nav-links">
        <li><Link to={"/youthfest"}>YOUTHFEST</Link></li>
        <li><Link to={"/events"}>EVENTS</Link></li>
        <li><Link to={"/about-us"}>ABOUT US</Link></li>
        <li><Link to={"/contact-us"}>CONTACT US</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
