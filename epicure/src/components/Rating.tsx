import React, { useState } from "react"


const Rating:React.FC<{rating:number}> = (props) => {
    const [rating, setRating] = useState(props.rating);
  return (
    <div className="star-rating">
 {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on star" : "off star"} 
            onClick={() => setRating(index)}
          >

          </button>
        );
      })}

    </div>
  )
}
export default Rating