import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import RestaurantCard from "../../components/RestaurantCard";
import {
  IChefsState,
  IRestaurant,
  IRestaurantState,
} from "../../data/interface";
import { IRootState } from "../../store";
import Restaurant from "./Restaurant";
import RestaurantFilters from "./RestaurantFilters";
import RestaurantsPopUpFilters from "./RestaurantsPopUpFilters";

const Restaurants: React.FC = () => {
  const navigate = useNavigate();
  const chefs: IChefsState["value"] = useSelector(
    (state: IRootState) => state.chefs.value
  );
  const restaurants: IRestaurantState["value"] = useSelector(
    (state: IRootState) => state.restaurants.changedValue
  );
  return (
    <>
      <NavBar />
      <div className="page-container">
        <RestaurantFilters />
        <RestaurantsPopUpFilters />
        <div className="grid">
          {restaurants.map((resaturant: IRestaurant, index: number) => {
            return (
              <RestaurantCard
                onClick={() => navigate(resaturant.name)}
                restaurant={resaturant}
                key={index}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Restaurants;
