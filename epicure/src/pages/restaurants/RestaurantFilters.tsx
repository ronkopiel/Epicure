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
          init={reInitializeRestaurants}
          function={reInitializeRestaurants}
          text={"All"}
        />
        <FilterButton
          init={reInitializeRestaurants}
          function={getNewRestaurants}
          text={"New"}
        />
        <FilterButton
          init={reInitializeRestaurants}
          function={sortPopularity}
          text={"Most Popular"}
        />
        <FilterButton
          init={reInitializeRestaurants}
          function={getOpenRestaurants}
          text={"Open Now"}
        />
        <button className="filter">Map View</button>
      </div>
    </div>
  );
};
export default RestaurantFilters;
