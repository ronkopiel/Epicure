import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ChefCard from "../../components/ChefCard";
import MiniRestaurantCard from "../../components/MiniRestauratntCard";
import { IChef, IRestaurant, IRestaurantState } from "../../data/interface";
import { IRootState } from "../../store";

const WeekChef  = (chef:IChef) => {
   const restaurants:IRestaurantState["changedValue"] = useSelector(
    (state: IRootState) => state.restaurants.changedValue
  );


  const chefsRestaurants = restaurants.filter(
    (resaturant:IRestaurant) => resaturant.chefID == chef.id
  );
  return (
    <>
      <div className="weeks-chef-container">
        <h2>chef of the week</h2>
        <div className="chef-week-card-container">
          <ChefCard
            chef={chef}
            size={"big"}
          />
          <div className="chef-description">{chef.chefDescription}</div>
        </div>
        <h2 className="week-chef-text">{chef.firstName}'s Restaurants</h2>
        <div className="chefs-restaurants">
          {chefsRestaurants.map((resaturant:IRestaurant, index:number) => {
            return (
              <MiniRestaurantCard
                restaurant={resaturant}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default WeekChef;
