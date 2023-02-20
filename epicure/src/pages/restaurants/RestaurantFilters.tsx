import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRestaurantState } from "../../data/interface";
import {
  getNewRestaurants,
  getOpenRestaurants,
  reInitializeRestaurants,
  sortPopularity,
} from "../../features/restaurantsSlicer";
import { IRootState } from "../../store";

const RestaurantFilters: React.FC = () => {
  const dispatch = useDispatch();
  const restaurants: IRestaurantState["value"] = useSelector(
    (state: IRootState) => state.restaurants.changedValue
  );
  return (
    <div className="restaurant-filters-container">
      <div className="restaurant-filters">
        <button
          className="restaurant-filter"
          onClick={() => dispatch(reInitializeRestaurants())}
        >
          All
        </button>
        <button
          className="restaurant-filter"
          onClick={() => dispatch(getNewRestaurants())}
        >
          New
        </button>
        <button
          className="restaurant-filter"
          onClick={() => dispatch(sortPopularity())}
        >
          Most Popular
        </button>
        <button
          className="restaurant-filter"
          onClick={() => dispatch(getOpenRestaurants())}
        >
          Open Now
        </button>
        <button className="restaurant-filter">Map View</button>
      </div>
    </div>
  );
};
export default RestaurantFilters;
