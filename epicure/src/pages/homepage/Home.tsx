import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import Hero from "./Hero";
import RestaurantCard from "../../components/RestaurantCard";
import DishCard from "../../components/DishCard";
import WeekChef from "./WeekChef";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store";
import {
  getNewRestaurants,
  getOpenRestaurants,
  reInitializeRestaurants,
  sortPopularity,
} from "../../features/restaurantsSlicer";
import {
  IChef,
  IRestaurant,
  IDish,
  IRestaurantState,
  IChefsState,
  IDishesState,
} from "../../data/interface";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sortPopularity());
  }, []);
  const chefs: IChefsState["value"] = useSelector(
    (state: IRootState) => state.chefs.value
  );
  const restaurants: IRestaurantState["value"] = useSelector(
    (state: IRootState) => state.restaurants.changedValue
  );
  const dishes: IDishesState["dishes"] = useSelector(
    (state: IRootState) => state.dishes.dishes
  );

  const popularRestaurants = restaurants.slice(0, 3);
  console.log(popularRestaurants);
  const signatureDishes = dishes.filter((dish: IDish) => {
    console.log(dish);
    console.log("restaurants signature dish: "+popularRestaurants[dish.resturantID].signatureDishID);
    console.log("current dish: "+dish.id+" current restaurant: "+dish.resturantID);
    console.log(popularRestaurants[dish.resturantID].signatureDishID === dish.id);
    const a =popularRestaurants[dish.resturantID].signatureDishID 
    const b = dish.id
    return a === b
  });
  const chefOfTheWeek = chefs.filter((chef: IChef) => chef.isChefOfTheWeek);
  return (
    <>
      <NavBar />
      <div className="container">
        <Hero />
        <div className="popular-restaurants-container">
          <h2>popular restaurant in epicure:</h2>
          <div className="grid">
            {popularRestaurants.map(
              (resaturant: IRestaurant, index: number) => {
                return (
                  <RestaurantCard
                    onClick={() => {
                      return;
                    }}
                    restaurant={resaturant}
                    key={index}
                  />
                );
              }
            )}
          </div>
          <a href="/restaurants" className="restaurant-link">
            All Restaurants <img src="/assets/Vector.svg" alt="" />
          </a>
        </div>
        <h2>SIGNATURE DISH OF:</h2>
        <div className="grid">
          {signatureDishes.map((dish: IDish, index: number) => {
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
        <div className="icon-description-container">
          <h2>the meaning of our icons:</h2>
          <div className="icons-description">
            <div className="icon-description">
              <img src="/assets/spicyBig.svg" alt="" className="big-icon" />
              <span>Spicy</span>
            </div>
            <div className="icon-description">
              <img
                src="/assets/vegitarianBig.svg"
                alt=""
                className="big-icon"
              />
              <span>Spicy</span>
            </div>
            <div className="icon-description">
              <img src="/assets/VeganBig.svg" alt="" className="big-icon" />
              <span>Vegan</span>
            </div>
          </div>
        </div>
        {chefOfTheWeek.map((chef: IChef, index: number) => {
          return (
            <WeekChef
              firstName={chef.firstName}
              lastName={chef.lastName}
              portrait={chef.portrait}
              isChefOfTheWeek={chef.isChefOfTheWeek}
              isNew={chef.isNew}
              viewCount={chef.viewCount}
              resturants={chef.resturants}
              id={chef.id}
              chefDescription={chef.chefDescription}
              key={index}
            />
          );
        })}
        <div className="bottom-container-homepage">
          <div className="about">
            <h2>about us:</h2>
            <p className="about-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum non eu ipsum. Cras porta
              malesuada eros, eget blandit turpis suscipit at. Vestibulum sed
              massa in magna sodales porta. Vivamus elit urna, dignissim a
              vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras
              porta malesuada eros.
            </p>
            <div className="app-downloads">
              <button className="store-link">
                <img src="/assets/apple.svg" alt="" />
                <div className="text-flex">
                  <div className="app-text">Download on the</div>
                  <div className="app-name">App Store</div>
                </div>
              </button>
              <button className="store-link">
                <img src="/assets/playstore.svg" alt="" />
                <div className="text-flex">
                  <div className="app-text">Get it on</div>
                  <div className="app-name">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          <img src="/assets/about-logo@3x 2.svg" alt="" className="site-logo" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
