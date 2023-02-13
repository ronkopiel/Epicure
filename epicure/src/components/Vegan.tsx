import React from "react"



const Vegan:React.FC<{isVegan:boolean}> = (props) => {
    if (props.isVegan){
        return (
          <img src="/assets/veganBig.svg" alt="" className="dish-icon"/>
        )
    }
    else {
        return <></>
    }
}
export default Vegan