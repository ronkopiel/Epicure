import React from "react";
import SearchBar from "../../components/SearchBar";
import SearchHero from "./SearchHero";

const Hero: React.FC = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero">
          <h1 className="hero-desc">Epicure works with the top chef restaurants in Tel Aviv</h1>
          <SearchHero />
        </div>
      </div>
    </>
  );
};
export default Hero;
