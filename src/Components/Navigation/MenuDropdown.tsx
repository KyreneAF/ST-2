import React from "react";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const MenuDropdown = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const ulRef = useRef<HTMLDivElement>(null);
  //   const ulRef = useRef();

  const toggleMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <div className="menu-dropdown">
      <div className="toggle" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      {showMenu && (
        <div className="dropdown" ref={ulRef}>
          <div className={`navLinks ${showMenu ? "show" : ""}`}>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/menu">MENU</NavLink>
            <NavLink to="/regular-menu">REGULAR MENU</NavLink>
            <NavLink to="/spiked-menu">SPIKED MENU</NavLink>
            <NavLink to="/about">ABOUT US</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
