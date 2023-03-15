import React from 'react';
// import { NavLink } from "react-router-dom";
import './styles.scss';

const Header = () => {
  return (
    <div className="header" style={{ display: "none" }}>
      <div className="logo">
        <a href="/">
          <img className="logo__image" src="../../static/logo.png" />
        </a>
      </div>
      <div className="menu">
        <a className="menu__link" href="/">Home</a>
        <a className="menu__link" href="#about">About</a>
        <a className="menu__link" href="#contact">Contact</a>
      </div>
      <div className="action">
        <a className="action__contact" href="tel:+918248229214">
          +91 82482 29214
        </a>
      </div>
    </div>
  );
}

export default Header;
