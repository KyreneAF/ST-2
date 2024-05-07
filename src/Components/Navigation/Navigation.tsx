import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";
import transparentLogo from "../../assets/images/transparentLogo.png";
import banner from "../../assets/images/banner.png";
import "../../../sass/stylesheets/components/_Navigation.scss";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="__logo">
        <img
          className="__logo-img click"
          src={transparentLogo}
          onClick={() => navigate("/")}
        />
        <div className="__banner click" onClick={() => navigate("/")}>
          <img src={banner} />
        </div>
      </div>
      <MenuDropdown />
      <div className="navLinks">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/menu">MENU</NavLink>
        <NavLink to="/regular-menu">REGULAR MENU</NavLink>
        <NavLink to="/spiked-menu">SPIKED MENU</NavLink>
        <NavLink to="/about">ABOUT US</NavLink>
      </div>
    </div>
  );
};

export default Navigation;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import transparentLogo from "../../assets/images/transparentLogo.png";
// import banner from "../../assets/images/banner.png";
// import "../../../sass/stylesheets/components/_Navigation.scss";

// const Navigation: React.FC = () => {
//   const [showDropdown, setShowDropdown] = useState<boolean>(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <div className="navbar">
//       <div className="__logo">
//         <img className="__logo-img" src={transparentLogo} alt="Logo" />
//         <div className="__banner">
//           <img src={banner} alt="Banner" />
//         </div>
//       </div>
//       <div className="menu-toggle" onClick={toggleDropdown}>
//         <span>&#9776;</span> {/* Hamburger menu icon */}
//       </div>
//       <div className={`navLinks ${showDropdown ? "show" : ""}`}>
//         <NavLink to="/" onClick={toggleDropdown}>
//           HOME
//         </NavLink>
//         <NavLink to="/menu" onClick={toggleDropdown}>
//           MENU
//         </NavLink>
//         <NavLink to="/regular-menu" onClick={toggleDropdown}>
//           REGULAR MENU
//         </NavLink>
//         <NavLink to="/spiked-menu" onClick={toggleDropdown}>
//           SPIKED MENU
//         </NavLink>
//         <NavLink to="/about" onClick={toggleDropdown}>
//           ABOUT US
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Navigation;
