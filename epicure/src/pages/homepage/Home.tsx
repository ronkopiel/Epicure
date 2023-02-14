import React from "react";
import NavBar from "../../components/NavBar";
import Hero from "./Hero";
import RestaurantCard from "../../components/RestaurantCard";
import datas from "../../data/resturants.json";
import DishCard from "../../components/DishCard";
import WeekChef from "./WeekChef";
const data = datas[0];
const popularRestaurants = data.restaurants
  .sort((a, b) => b.viewCount - a.viewCount)
  .slice(0, 3);
const signatureDishes = data.dishes.filter((dish) => {
  popularRestaurants.map((resaturant) => {
    if (resaturant.signatureDishID == dish.id) {
      return dish;
    }
  });
  return dish;
});
const chefOfTheWeek = data.chefs.filter((chef) => chef.isChefOfTheWeek);
const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Hero />
        <div className="popular-restaurants-container">
          <h2>popular restaurant in epicure:</h2>
          <div className="grid">
            {popularRestaurants.map((resaturant, index) => {
              return (
                <RestaurantCard
                  id={resaturant.id}
                  name={resaturant.name}
                  img={resaturant.img}
                  hours={resaturant.hours}
                  address={resaturant.address}
                  rating={resaturant.rating}
                  chefID={resaturant.chefID}
                  viewCount={resaturant.viewCount}
                  chefName={data.chefs[resaturant.chefID].firstName+" "+data.chefs[resaturant.chefID].lastName}
                  signatureDishID={resaturant.signatureDishID}
                  key={index}
                />
              );
            })}
          </div>
          <a href="/restaurants" className="restaurant-link">
            All Restaurants <img src="/assets/Vector.svg" alt="" />
          </a>
        </div>
        <h2>SIGNATURE DISH OF:</h2>
        <div className="grid">
          {signatureDishes.map((dish, index) => {
            return (
              <DishCard
                id={dish.id}
                name={dish.name}
                image={dish.image}
                resturantID={dish.resturantID}
                ingredients={dish.ingredients}
                price={dish.price}
                isSpicy={dish.isSpicy}
                isVegan={dish.isVegan}
                isVegitarian={dish.isVegitarian}
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
          {chefOfTheWeek.map((chef, index) => {
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
      </div>
    </>
  );
};

export default Home;
