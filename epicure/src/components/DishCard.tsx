import React from "react";
import {IDish} from "./../data/interface";
import Spicy from "./Spicy";
import Vegan from "./Vegan";
import Vegitarian from "./Vegitarian";

const DishCard: React.FC<IDish> = (dish) => {
  return (
    <>
      <div className="dish-card">
        <img src={dish.image} alt="" className="dish-card-img" />
        <div className="dish-info">
          <h3 className="dish-name">{dish.name}</h3>
          <div className="dish-icons">
            <Vegan isVegan={dish.isVegan} />
            <Spicy isSpicy={dish.isSpicy} />
            <Vegitarian isVegitarian={dish.isVegitarian} />
          </div>
          <span className="ingridients">{dish.ingredients}</span>
          <div className={dish.isSpicy||dish.isVegan||dish.isVegitarian ? "hidden" : "price"} >
            <div className="line"></div>
            <img src="/assets/ils 1.svg" alt="" />
            {dish.price}
            <div className="line"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DishCard;
