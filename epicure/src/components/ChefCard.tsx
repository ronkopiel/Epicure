import React from "react"
import {Chef} from "../data/interface";




const ChefCard:React.FC<Chef> = (chef) => {
  return (
    <div className="chef-card">
        <img src={chef.portrait} alt="" className="chef-portrait"/>
        <div className="chef-name"><h3>{chef.firstName+ " "+chef.lastName}</h3></div>
    </div>
  )
}
export default ChefCard