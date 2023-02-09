import React from "react";
import searchIcon from '../../assets/Search.svg'
const SearchHero: React.FC = () => {
  return (
    <>
      <div className="hero-search">
        <img src={searchIcon} alt="" className="search-button-logo-bigger"/>
        <input type="search" id="search-hero" placeholder="Search for restaurant cuisine, chef" />
      </div>
    </>
  );
};
export default SearchHero;
