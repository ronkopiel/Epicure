import React from "react"
import dataInterface from "../data/interface";




const ChefCard:React.FC<dataInterface.Chef> = (props) => {
  return (
    <div className="chef-card">
        <img src={props.portrait} alt="" />
        <div className="chef-name">{props.name}</div>
    </div>
  )
}
export default ChefCard