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

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="menu-dropdown">
      <div className="toggle" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      {showMenu && (
        <div className="dropdown" ref={ulRef}>
          <div className={`navLinks ${showMenu ? "show" : ""}`}>
            <NavLink to="/" onClick={() => closeMenu()}>
              HOME
            </NavLink>
            <NavLink to="/menu" onClick={() => closeMenu()}>
              MENU
            </NavLink>
            <NavLink to="/regular-menu" onClick={() => closeMenu()}>
              REGULAR MENU
            </NavLink>
            <NavLink to="/spiked-menu" onClick={() => closeMenu()}>
              SPIKED MENU
            </NavLink>
            <NavLink to="/about" onClick={() => closeMenu()}>
              ABOUT US
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
