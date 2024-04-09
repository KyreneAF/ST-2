import { NavLink } from "react-router-dom";
import transparentLogo from "../../assets/images/transparentLogo.png";
import banner from "../../assets/images/banner.png";
import "../../../sass/stylesheets/components/_Navigation.scss";

const Navigation = () => {

  return (
    <div className="navbar">
      <div className="__logo">
        <img className='__logo-img' src={transparentLogo} />
        <div className="__banner">
          <img src={banner} />
        </div>
      </div>
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
