import React from "react"
import dataInterface from "./../data/interface";


const RestaurantCard:React.FC<dataInterface.Restaurant> = (props) => {
  return (
    <>
    <div>
        <img src={props.img} alt="" />
    </div>
    </>
  )
}
export default RestaurantCard