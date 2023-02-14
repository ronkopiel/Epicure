import React from "react";
import NavBar from "../../components/NavBar";
import Hero from "./Hero";
import RestaurantCard from "../../components/RestaurantCard";
import datas from "../../data/resturants.json";
import DishCard from "../../components/DishCard";
import WeekChef from "./WeekChef";
import Footer from "../../components/Footer";
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
                  chefName={
                    data.chefs[resaturant.chefID].firstName +
                    " " +
                    data.chefs[resaturant.chefID].lastName
                  }
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
          <img src="/assets/about-logo@3x 2.svg" alt=""  className="site-logo"/>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
