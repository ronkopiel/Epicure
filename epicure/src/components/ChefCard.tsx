import React from "react"
import {IChef} from "../data/interface";




const ChefCard:React.FC<IChef> = (chef) => {
  return (
    <div className="chef-card">
        <img src={chef.portrait} alt="" className="chef-portrait"/>
        <div className="chef-name"><h3>{chef.firstName+ " "+chef.lastName}</h3></div>
    </div>
  )
}
export default ChefCard