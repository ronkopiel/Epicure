import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DishCard from "../../components/DishCard";
import NavBar from "../../components/NavBar";
import {
  IChefsState,
  IDish,
  IDishesState,
} from "../../data/interface";
import { setRestaurantDishes, setServiceDishes } from "../../features/dishesSlicer";
import { getRestaurant } from "../../features/restaurantsSlicer";
import { IRootState } from "../../store";
import DishesFilters from "./DishesFilters";

const Restaurant: React.FC = () => {
  const dispatch = useDispatch();
  const { restaurantName } = useParams();
  useEffect(() => {
    dispatch(getRestaurant(restaurantName));
  }, [dispatch,restaurantName]);
  const restaurantArray = useSelector(
    (state: IRootState) => state.restaurants.chosenRestaurant
  );
  const [restaurant, setRestaurant] = useState(restaurantArray);
  useEffect(() => {
    dispatch(setRestaurantDishes(restaurant.dishes));
  }, [dispatch,restaurant.dishes]);
  const dishes: IDishesState["restaurantDishes"] = useSelector(
    (state: IRootState) => state.dishes.serviceDishes
  );
  
  const chefs: IChefsState["value"] = useSelector(
    (state: IRootState) => state.chefs.value
  );
  const [chef, setChef] = useState(chefs[restaurant.chefID]);

  const date = new Date();
  return (
    <>
      <NavBar />
      <div className="page-container">
        <img src={restaurant.img} alt="" className="restaurant-hero" />
        <h3>{restaurant.name}</h3>
        <div className="chef-name-big">
          {chef.firstName +
            " " +
            chef.lastName}
        </div>
        <div className="restaurant-status">
          <img src="/assets/clock-icon 1.svg" alt="" />
          {restaurant.openingHour <= date.getHours() &&
          restaurant.closingHour > date.getHours()
            ? " Open now"
            : " Closed"}
        </div>
        <DishesFilters  />
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
