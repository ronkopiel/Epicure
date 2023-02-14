import { text } from "body-parser";
import React from "react";
import ChefCard from "../../components/ChefCard";
import dataInterface from "../../data/interface";
import datas from "../../data/resturants.json";
const data = datas[0];

const WeekChef: React.FC<dataInterface.Chef> = (chef) => {
  const chefsRestaurants = data.restaurants.filter(
    (resaturant) => resaturant.chefID == chef.id
  );
  console.log(chefsRestaurants)
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
        <div className="chefs-restaurants"></div>
      </div>
    </>
  );
};
export default WeekChef;
