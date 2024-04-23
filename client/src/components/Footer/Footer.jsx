import React from "react";
import "./Footer.css";
import youtube from '../../assets/icons8-youtube.svg'
import insta from '../../assets/icons8-instagram.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>©️ Younite SRHU. All rights reserved.</p>
        </div>
        <div className="social-media">
          <a href="https://www.instagram.com/younite_srhu/" target="blank"><img src={insta} alt="icon" className="social-icons"/><span>Instagram</span></a>
          <a href="https://www.youtube.com/@swamiramahimalayanuniversi7746" target="blank"><img src={youtube} alt="icon" className="social-icons"/>YouTube</a>
        </div>
    </footer>
  );
};

export default Footer