import regularMenu from "../../assets/images/regularMenu.png"; // These are imports to bring images in assets folder
import spikedMenu from "../../assets/images/spikedMenu.jpeg";

const Menu = () => {
  //This comopenent renders the menu image on its own page
  return (
    <div className="menu">
      <div className="__regular-menu-img">
        <img src={regularMenu} />
      </div>
      <div className="__spiked-menu-img">
        <img src={spikedMenu} />
      </div>
    </div>
  );
};

export default Menu;
