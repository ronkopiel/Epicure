import React from "react"
import dataInterface from "./../data/interface";


const RestaurantCard:React.FC<dataInterface.Restaurant> = (props) => {
  return (
    <>
    <div className=".resaturant-card">
        <img src={props.img} alt="" className="resaturant-card-img" />
        <h3>{props.name}</h3>
        <span>{props.chefName}</span>
    </div>
    </>
  )
}
export default RestaurantCard