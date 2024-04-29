import spikedDrinks from "../../../spikedDrinks.json";
import React from "react";
import {
  milkTea,
  spikedThaiTea,
  taroRefresher,
  berryMojito,
  pinaColada,
  honeydewRefresherSpiked,
  cranberrySurprise,
  spikedJasmineGT,
  spikedLychee,
  spikedDragonfruitLemonade,
  peachBlackTea,
  passionfruitBomb,
  mangoPaloma,
  frozenMargarita,
  tequilaSunrise,
  spikedGreentea,
} from "../../assets/images/carouselImages";
// import "../../../sass/stylesheets/components/_SpikedMenu.scss";
const SpikedMenu = () => {
  const drinkImges = [
    milkTea,
    null,
    spikedThaiTea,
    taroRefresher,
    berryMojito,
    pinaColada,
    honeydewRefresherSpiked,
    cranberrySurprise,
    spikedJasmineGT,
    spikedLychee,
    spikedDragonfruitLemonade,
    tequilaSunrise,
    spikedGreentea,
    peachBlackTea,
    passionfruitBomb,
    mangoPaloma,
    frozenMargarita,
  ];
  return (
    <div className="regular-menu">
      <div className="all-drinks">
        {spikedDrinks.map((drinkObj, index) => (
          <div key={index} className="single-drink">
            <img
              src={
                drinkImges[0] && drinkImges[index] !== null
                  ? drinkImges[index]
                  : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
              }
            />
            <span className="__drink-name">{drinkObj.name}</span>
            {/* <div className="ingredients">{drinkObj.ingredients}</div> */}
            <div className="price">
              <span>{drinkObj.size[0]}.00</span>
              <span>{drinkObj.size[1]}.00</span>
            </div>
            <div key={index} className="ingredients">
              {drinkObj.ingredients.map((ingredient) => (
                <p>{ingredient},</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpikedMenu;
// "ingredients": ["Brandy", "Boba"],
