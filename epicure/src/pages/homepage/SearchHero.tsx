import React from "react";
const SearchHero: React.FC = () => {
  return (
    <>
      <div className="hero-search">
        <img src='assets/search.svg' alt="" className="search-button-logo-bigger"/>
        <input type="search" id="search-hero" placeholder="Search for restaurant cuisine, chef" />
      </div>
    </>
  );
};
export default SearchHero;
