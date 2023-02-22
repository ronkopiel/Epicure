import React from "react";
import {IDish} from "./../data/interface";
import Spicy from "./Spicy";
import Vegan from "./Vegan";
import Vegitarian from "./Vegitarian";

interface Card {
  dish:IDish
  onClick: () => void;
}
const DishCard: React.FC<Card> = (props) => {
  return (
    <>
      <div className="dish-card">
        <img src={props.dish.image} alt="" className="dish-card-img" />
        <div className="dish-info">
          <h3 className="dish-name">{props.dish.name}</h3>
          <div className="dish-icons">
            <Vegan isVegan={props.dish.isVegan} />
            <Spicy isSpicy={props.dish.isSpicy} />
            <Vegitarian isVegitarian={props.dish.isVegitarian} />
          </div>
          <span className="ingridients">{props.dish.ingredients}</span>
          <div className={props.dish.isSpicy||props.dish.isVegan||props.dish.isVegitarian ? "hidden" : "price"} >
            <div className="line"></div>
            <img src="/assets/ils 1.svg" alt="" />
            {props.dish.price}
            <div className="line"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DishCard;
