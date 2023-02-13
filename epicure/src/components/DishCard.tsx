import React from "react";
import dataInterface from "./../data/interface";
import Spicy from "./Spicy";
import Vegan from "./Vegan";
import Vegitarian from "./Vegitarian";

const DishCard: React.FC<dataInterface.Dish> = (props) => {
  return (
    <>
      <div className="dish-card">
        <img src={props.image} alt="" className="dish-card-img" />
        <div className="dish-info">
          <h3 className="dish-name">{props.name}</h3>
          <div className="dish-icons">
            <Vegan isVegan={props.isVegan} />
            <Spicy isSpicy={props.isSpicy} />
            <Vegitarian isVegitarian={props.isVegitarian} />
          </div>
          <span className="ingridients">{props.ingredients}</span>
          <div className={props.isSpicy||props.isVegan||props.isVegitarian ? "hidden" : "price"} >
            <div className="line"></div>
            <img src="/assets/ils 1.svg" alt="" />
            {props.price}
            <div className="line"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DishCard;
