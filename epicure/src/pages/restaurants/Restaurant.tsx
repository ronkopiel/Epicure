import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DishCard from "../../components/DishCard";
import NavBar from "../../components/NavBar";
import {
  IChefsState,
  IDish,
  IDishesState,
  IRestaurant,
} from "../../data/interface";
import { setRestaurantDishes } from "../../features/dishesSlicer";
import { getRestaurant } from "../../features/restaurantsSlicer";
import { IRootState } from "../../store";
import DishesFilters from "./DishesFilters";

const Restaurant: React.FC = () => {
  const dispatch = useDispatch();
  const { restaurantName } = useParams();
    dispatch(getRestaurant(restaurantName));
  const restaurantArray = useSelector(
    (state: IRootState) => state.restaurants.chosenRestaurant
  );
  const restaurant: IRestaurant = restaurantArray[0];  
    dispatch(setRestaurantDishes(restaurant.dishes));
  const dishes: IDishesState["restaurantDishes"] = useSelector(
    (state: IRootState) => state.dishes.restaurantDishes
  );
  const chefs: IChefsState["value"] = useSelector(
    (state: IRootState) => state.chefs.value
  );
  const date = new Date();
  return (
    <>
      <NavBar />
      <div className="page-container">
        <img src={restaurant.img} alt="" className="restaurant-hero" />
        <h3>{restaurant.name}</h3>
        <div className="chef-name-big">
          {chefs[restaurant.chefID].firstName +
            " " +
            chefs[restaurant.chefID].lastName}
        </div>
        <div className="restaurant-status">
          <img src="/assets/clock-icon 1.svg" alt="" />
          {restaurant.openingHour <= date.getHours() &&
          restaurant.closingHour > date.getHours()
            ? " Open now"
            : " Closed"}
        </div>
        <DishesFilters />
        <div className="dish-grid">
          {dishes.map((dish: IDish, index: number) => {
            return (
              <DishCard
                dish={dish}
                onClick={() => {
                  return;
                }}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Restaurant;
