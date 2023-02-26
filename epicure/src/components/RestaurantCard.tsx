import React from "react"
import { useSelector } from "react-redux";
import { IRootState } from "../store";
import {IChefsState, IRestaurant} from "./../data/interface";
import Rating from "./Rating";

interface Card {
  restaurant:IRestaurant
  onClick: () => void;
}
const RestaurantCard:React.FC<Card> = (props) => {
  const chefs: IChefsState["value"] = useSelector(
    (state: IRootState) => state.chefs.value
  );
  const restaurant = props.restaurant
  return (
    <>
    <div className="resaturant-card" onClick={()=>props.onClick()} >
        <img src={restaurant.img} alt="" className="resaturant-card-img" />
        <h3>{restaurant.name}</h3>
        <span>{chefs[restaurant.chefID].firstName+" "+chefs[restaurant.chefID].lastName}</span>
        <Rating rating={restaurant.rating}/>
    </div>
    </>
  )
}
export default RestaurantCard