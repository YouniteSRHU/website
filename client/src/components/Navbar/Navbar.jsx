import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">YOUNITE</div>
      <ul className="nav-links">
        <li>YOUTHFEST</li>
        <li>EVENTS</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
      </ul>
    </nav>
  );
};

export default Navbar;
