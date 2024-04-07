import spikedDrinks from "../../../spikedDrinks.json";

const SpikedMenu = () => {
  return (
    <div className="regular-menu">
      <div className="all-drinks"></div>
      {spikedDrinks.map((drinkObj, index) => (
        <div key={index} className="single-drink">
          <span>{drinkObj.name}</span>
          {drinkObj.ingredients.map((ingredient, index) => (
            <div key={index} className="ingredients">
              <span>{ingredient}</span>
            </div>
          ))}
          <div className="price">
            <span>{drinkObj.size[0]}</span>
            <span>{drinkObj.size[1]}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpikedMenu;
