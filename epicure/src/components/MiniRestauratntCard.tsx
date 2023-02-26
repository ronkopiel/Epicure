import React from "react"
import {IRestaurant} from "./../data/interface";



const MiniRestaurantCard:React.FC<{restaurant:IRestaurant}> = (props) => {
  return (
    <>
    <div className="mini-resaturant-card">
        <img src={props.restaurant.img} alt="" className="mini-resaturant-card-img" />
        <h2 style={{textTransform: "none"}}>{props.restaurant.name}</h2>
    </div>
    </>
  )
}
export default MiniRestaurantCard