import React from "react"
interface IFilter {
    name:string
} 
const PopupFilter:React.FC<IFilter> = (props) => {
  return (
    <div className="popup-filter-container">
        <button className="popup-filter">
            <div className="popup-filter-content">
                {props.name}
            </div>
            <img src="/assets/dropdown.svg" alt="" className="dropdown" />
        </button>
    </div>
  )
}
export default PopupFilter