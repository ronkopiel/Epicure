import React from "react"
import {IRestaurant} from "./../data/interface";
import Rating from "./Rating";


const RestaurantCard:React.FC<IRestaurant> = (resaturant) => {
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