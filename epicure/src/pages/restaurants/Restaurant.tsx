import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DishCard from "../../components/DishCard";
import { IDish, IDishesState, IRestaurant } from "../../data/interface";
import { setRestaurantDishes } from "../../features/dishesSlicer";
import { getRestaurant } from "../../features/restaurantsSlicer";
import { IRootState } from "../../store";
import DishesFilters from "./DishesFilters";

const Restaurant: React.FC = () => {
  const dispatch = useDispatch();
  const {restaurantName}  = useParams();  
  dispatch(getRestaurant( restaurantName ));
  const restaurant = useSelector(
    (state: IRootState) => state.restaurants.chosenRestaurant
  );
  console.log(restaurant);
  
  dispatch(setRestaurantDishes(restaurant[0].dishes));
  const dishes: IDishesState["dishes"] = useSelector(
    (state: IRootState) => state.dishes.changedDishes
  );
  console.log(dishes);
  
  const date = new Date();
  return (
    <>
      <div className="page-container">
        <img src={restaurant[0].img} alt="" className="restaurant-hero" />
        <h3>{restaurant[0].name}</h3>
        <div className="chef-name-big">{restaurant[0].chefName}</div>
        <div className="restaurant-status">
          {restaurant[0].openingHour <= date.getHours() &&
          restaurant[0].closingHour > date.getHours()
            ? "Open now"
            : "Closed"}
        </div>
        <DishesFilters />
        <div className="dish-grid">
        {dishes.map((dish: IDish, index: number) => {
            return (
              <DishCard
              dish={dish}
              onClick={()=>{return}}
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
