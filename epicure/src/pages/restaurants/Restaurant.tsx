import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IRestaurant } from "../../data/interface";
import { setRestaurantDishes } from "../../features/dishesSlicer";
import { getRestaurant } from "../../features/restaurantsSlicer";
import { IRootState } from "../../store";
import DishesFilters from "./DishesFilters";

const Restaurant: React.FC = () => {
  const dispatch = useDispatch();
  const { restaurantName } = useParams();
  dispatch(getRestaurant({ restaurantName }));
  const restaurant: IRestaurant = useSelector(
    (state: IRootState) => state.restaurants.chosenRestaurant
  );
  const dishes = dispatch(setRestaurantDishes(restaurant.dishes));
  console.log(dishes);
  const date = new Date();
  return (
    <>
      <div className="page-container">
        <img src={restaurant.img} alt="" className="restaurant-hero" />
        <h3>{restaurant.name}</h3>
        <div className="chef-name-big">{restaurant.chefName}</div>
        <div className="restaurant-status">
          {restaurant.openingHour <= date.getHours() &&
          restaurant.closingHour > date.getHours()
            ? "Open now"
            : "Closed"}
        </div>
        <DishesFilters />
        <div className="dish-grid"></div>
      </div>
    </>
  );
};

export default Restaurant;
