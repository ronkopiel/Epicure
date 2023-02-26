import React from "react"
import {IChef} from "../data/interface";


interface Card {
  chef:IChef
  size:string
}

const ChefCard:React.FC<Card> = (props) => {
  return (
    <div className={props.size +" chef-card"}>
        <img src={props.chef.portrait} alt="" className="chef-portrait"/>
        <div className="chef-name"><h3>{props.chef.firstName+ " "+props.chef.lastName}</h3></div>
    </div>
  )
}
export default ChefCard