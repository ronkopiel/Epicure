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
            firstName={chef.firstName}
            lastName={chef.lastName}
            portrait={chef.portrait}
            isChefOfTheWeek={chef.isChefOfTheWeek}
            isNew={chef.isNew}
            viewCount={chef.viewCount}
            resturants={chef.resturants}
            id={chef.id}
            chefDescription={chef.chefDescription}
          />
          <div className="chef-description">{chef.chefDescription}</div>
        </div>
        <h2 className="week-chef-text">{chef.firstName}'s Restaurants</h2>
        <div className="chefs-restaurants">
          {chefsRestaurants.map((resaturant:IRestaurant, index:number) => {
            return (
              <MiniRestaurantCard
                id={resaturant.id}
                name={resaturant.name}
                img={resaturant.img}
                openingHour={resaturant.openingHour}
                closingHour={resaturant.closingHour}
                address={resaturant.address}
                rating={resaturant.rating}
                chefID={resaturant.chefID}
                viewCount={resaturant.viewCount}
                chefName={chef.firstName + " " + chef.lastName}
                signatureDishID={resaturant.signatureDishID}
                isNew={resaturant.isNew}
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
