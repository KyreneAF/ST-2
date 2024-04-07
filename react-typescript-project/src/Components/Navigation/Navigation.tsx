import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="__logo">
        <img src={logo} />
      </div>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/regular-menu">Regular Menu</NavLink>
      <NavLink to="/spiked-menu">Spiked Menu</NavLink>
    </div>
  );
};

export default Navigation;
