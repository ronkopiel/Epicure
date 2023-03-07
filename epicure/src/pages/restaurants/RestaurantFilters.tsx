import React from "react";
import FilterButton from "../../components/FilterButton";
import {
  getNewRestaurants,
  getOpenRestaurants,
  reInitializeRestaurants,
  sortPopularity,
} from "../../features/restaurantsSlicer";

const RestaurantFilters: React.FC = () => {
  return (
    <div className="filters-container">
      <div className="filters">
        <FilterButton
          function={reInitializeRestaurants}
          text={"All"}
        />
        <FilterButton
          function={getNewRestaurants}
          text={"New"}
        />
        <FilterButton
          function={sortPopularity}
          text={"Most Popular"}
        />
        <FilterButton
          function={getOpenRestaurants}
          text={"Open Now"}
        />
        <button className="filter">Map View</button>
      </div>
    </div>
  );
};
export default RestaurantFilters;
