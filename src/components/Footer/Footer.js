import React from "react";
import { Link } from "react-router-dom";

import bg from "../../assets/images/footer.jpg";
import logo from "../../assets/images/logo.png";

import './Footer.scss'

function Footer() {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer-content container">
        <div className="footer-logo">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="footer-menu">
          <div className="fotter-menu-list">
            <Link to='/'>Home</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Team of services</Link>
            <Link to='/'>About Us</Link>
          </div>
          <div className="fotter-menu-list">
            <Link to='/'>Live</Link>
            <Link to='/contact'>FAQ</Link>
            <Link to='/'>Premium</Link>
            <Link to='/'>pravacy policy</Link>
          </div>
          <div className="fotter-menu-list">
            <Link to='/'>You  must watch</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/'>Top IMDB</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
