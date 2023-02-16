import React from "react"
import {Restaurant} from "./../data/interface";



const MiniRestaurantCard:React.FC<Restaurant> = (resaturant) => {
  return (
    <>
    <div className="mini-resaturant-card">
        <img src={resaturant.img} alt="" className="mini-resaturant-card-img" />
        <h2 style={{textTransform: "none"}}>{resaturant.name}</h2>
    </div>
    </>
  )
}
export default MiniRestaurantCard