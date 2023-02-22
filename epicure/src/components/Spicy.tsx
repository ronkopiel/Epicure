import React from "react"


const Spicy:React.FC<{isSpicy:boolean}> = (props) => {
    if (props.isSpicy){
        return (
          <img src="/assets/spicyBig.svg" alt="" className="dish-icon"/>
        )
    }
    else {
        return <></>
    }
}
export default Spicy