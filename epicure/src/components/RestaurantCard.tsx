import React from "react"
import {IRestaurant} from "./../data/interface";
import Rating from "./Rating";

interface Card {
  restaurant:IRestaurant
  onClick: () => void;
}
const RestaurantCard:React.FC<Card> = (props) => {
  return (
    <>
    <div className="resaturant-card" onClick={()=>props.onClick()} >
        <img src={props.restaurant.img} alt="" className="resaturant-card-img" />
        <h3>{props.restaurant.name}</h3>
        <span>{props.restaurant.chefName}</span>
        <Rating rating={props.restaurant.rating}/>
    </div>
    </>
  )
}
export default RestaurantCard