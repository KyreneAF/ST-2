import regularMenu from "../../assets/images/regularMenu.png";
import spikedMenu from "../../assets/images/spikedMenu.jpeg";

const Menu = () => {
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
