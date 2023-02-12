import React from "react";
import NavBar from "../../components/NavBar";
import Hero from "./Hero";
import RestaurantCard from "../../components/RestaurantCard";
import datas from "../../data/resturants.json";
const data = datas[0];
const popularRestaurants = data.restaurants
  .sort((a, b) => b.viewCount - a.viewCount)
  .slice(0, 3);
const Home: React.FC = () => {
  return (
    <>
      <NavBar />
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
                chefName={data.chefs[resaturant.chefID].name}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
