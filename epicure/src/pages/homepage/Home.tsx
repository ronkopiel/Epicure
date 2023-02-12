import React from "react";
import NavBar from "../../components/NavBar";
import Hero from "./Hero";
import RestaurantCard from "../../components/RestaurantCard";
import datas from "../../data/resturants.json"  
import dataInterface from "../../data/interface";

const restaurantData = datas[0].restaurants;



const Home:React.FC = () => {
    return <>
    <NavBar />
    <Hero />
        <RestaurantCard id={0} name={""} img={restaurantData[0].img} hours={""} address={""} rating={0} chefID={0} />
    </>
}

export default Home