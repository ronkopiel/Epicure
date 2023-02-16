import React from "react"
import {Restaurant} from "./../data/interface";
import Rating from "./Rating";


const RestaurantCard:React.FC<Restaurant> = (resaturant) => {
  return (
    <>
    <div className="resaturant-card">
        <img src={resaturant.img} alt="" className="resaturant-card-img" />
        <h3>{resaturant.name}</h3>
        <span>{resaturant.chefName}</span>
        <Rating rating={resaturant.rating}/>
    </div>
    </>
  )
}
export default RestaurantCard