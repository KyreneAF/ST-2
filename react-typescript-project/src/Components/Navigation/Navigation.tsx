import { NavLink } from "react-router-dom";
import transparentLogo from "../../assets/images/transparentLogo.png";
import banner from  "../../assets/images/banner.png";
import "../../../sass/stylesheets/components/_Navigation.scss";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="__logo">
        <img src={transparentLogo} />
      </div>
      <div className="__banner">
        <img src={banner}/>
      </div>
      <div className='navLinks'>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/regular-menu">Regular Menu</NavLink>
      <NavLink to="/spiked-menu">Spiked Menu</NavLink>
      <NavLink to="/about">About Us</NavLink>

      </div>
    </div>
  );
};

export default Navigation;
