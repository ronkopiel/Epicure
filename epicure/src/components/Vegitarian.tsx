import React from "react"


const Vegitarian:React.FC<{isVegitarian:boolean}> = (props) => {
    if (props.isVegitarian){
        return (
          <img src="/assets/spicyBig.svg" alt="" className="dish-icon"/>
        )
    }
    else {
        return <></>
    }
}
export default Vegitarian