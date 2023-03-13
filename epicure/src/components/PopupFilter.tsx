import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import ReactSlider from "react-slider";
import { IDishesState, IRestaurantState } from "../data/interface";

import { IRootState } from "../store";

interface IFilter {
  name: string;
  slicer: Function;
  filter: string;
}
const PopupFilter: React.FC<IFilter> = (props) => {
  const dishes: IDishesState["restaurantDishes"] = useSelector(
    (state: IRootState) => state.dishes.restaurantDishes
  );
  const restaurants: IRestaurantState["value"] = useSelector(
    (state: IRootState) => state.restaurants.value
  );

  const dispatch = useDispatch();
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [fiterdMax, setFilteredMax] = useState(max);
  const [fiterdMin, setFilteredMin] = useState(min);
  const [clearButtonState, setClearButtonState] = useState(false);
  const [filterMenuState, setFilterMenuState] = useState("hide");
  switch (props.filter) {
    case "price":
      dishes.map((dish) => {
        if (dish.price > max) {
          setMax(dish.price);
          setFilteredMax(dish.price);
        } else if (dish.price < min) {
          setMin(dish.price);
          setFilteredMin(dish.price);
        }
      });
      break;
    case "rating":
      restaurants.map((resaturant) => {
        if (resaturant.rating > max) {
          setMax(resaturant.rating);
          setFilteredMax(resaturant.rating);
        } else if (resaturant.rating < min) {
          setMin(resaturant.rating);
          setFilteredMin(resaturant.rating);
        }
      });
      break;
    default:
      break;
  }
  useEffect(() => {
    switch (props.filter) {
      case "price":
        const filteredDishes = dishes.filter(
          (dish) => dish.price <= fiterdMax && dish.price >= fiterdMin
        );
        dispatch(props.slicer(filteredDishes));
        break;
      case "rating":
        const filteredRestaurants = restaurants.filter(
          (resaturant) =>
            resaturant.rating <= fiterdMax && resaturant.rating >= fiterdMin
        );
        dispatch(props.slicer(filteredRestaurants));
        break;
      default:
        break;
    }
  }, [fiterdMax, fiterdMin]);
  const toggleFillterMenu = () =>  filterMenuState === "hide"? setFilterMenuState(""): setFilterMenuState("hide")
    
  
  return (
    <>
    <div className="popup-filter">

      <button onClick={toggleFillterMenu} className="popup-filter-content">
        <span>{props.name}</span>
        <img src="/assets/dropdown.svg" alt="" className="dropdown-arrow" />
      </button>

      <div className={filterMenuState + " popup"}>
        <div className="range-container">
          <span>{props.name} selected</span>
          <div className="range">
            <span>
              {min}-{max}
            </span>
          </div>
        </div>
        <div className="slider-container">
          <div className="curent-min-max">
            <div className="curent-min">{fiterdMin}</div>
            <div className="curent-max">{fiterdMax}</div>
          </div>
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[min, max]}
            min={min}
            max={max}
            onChange={(value, index) => {
              if (value[index] !== min && value[index] !== max)
                setClearButtonState(true);
              else setClearButtonState(false);
              switch (index) {
                case 1:
                  setFilteredMax(value[index]);

                  break;
                case 0:
                  setFilteredMin(value[index]);
                  break;
                default:
                  break;
              }
            }}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => <div {...props}></div>}
            pearling
            minDistance={0}
          />
        </div>
        <button id="clear-button" className={clearButtonState? "": "hide"} onClick={() => {setFilteredMax(max);setFilteredMin(min)}}>CLEAR</button>
      </div>
    </div>
    </>
  );
};
export default PopupFilter;
