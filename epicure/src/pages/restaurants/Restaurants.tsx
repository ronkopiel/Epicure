import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar";
import RestaurantCard from "../../components/RestaurantCard";
import {
  IChefsState,
  IRestaurant,
  IRestaurantState,
} from "../../data/interface";
import { IRootState } from "../../store";
import RestaurantFilters from "./RestaurantFilters";
import RestaurantsPopUpFilters from "./RestaurantsPopUpFilters";

const Restaurants: React.FC = () => {
  const chefs: IChefsState["value"] = useSelector(
    (state: IRootState) => state.chefs.value
  );
  const restaurants: IRestaurantState["value"] = useSelector(
    (state: IRootState) => state.restaurants.changedValue
  );
  return (
    <>
      <NavBar />
      <div className="restaurants-page-container">
        <RestaurantFilters />
        <RestaurantsPopUpFilters />
        <div className="grid">
          {restaurants.map((resaturant: IRestaurant, index: number) => {
            return (
              <RestaurantCard
                id={resaturant.id}
                name={resaturant.name}
                img={resaturant.img}
                openingHour={resaturant.openingHour}
                closingHour={resaturant.closingHour}
                address={resaturant.address}
                rating={resaturant.rating}
                chefID={resaturant.chefID}
                viewCount={resaturant.viewCount}
                chefName={
                  chefs[resaturant.chefID].firstName +
                  " " +
                  chefs[resaturant.chefID].lastName
                }
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

export default Restaurants;
