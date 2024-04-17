import regularMenu from "../../assets/images/regularMenu.png"; // These are imports to bring images in assets folder
import spikedMenu from "../../assets/images/spikedMenu.jpeg";
import "../../../sass/stylesheets/components/_menu.scss";

const Menu = () => {
  //This comopenent renders the menu image on its own page
  return (
    <div className="menu">
      <div className="__menu-header">
        <h1>Menus</h1>
      </div>
      <div className="__regular-menu-img">
        <img className="__menu-img" src={regularMenu} />
      </div>
      <div className="__menu-header">
        <h1>Spiked Menu</h1>
      </div>
      <div className="__spiked-menu-img">
        <img className="__menu-img" src={spikedMenu} />
      </div>
    </div>
  );
};

export default Menu;
