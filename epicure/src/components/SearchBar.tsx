import React, { useState } from "react";
import search from "../assets/Search.svg";

const SearchBar:React.FC = () => {
  const [content, setContent] = useState("");
  const [searchFieldFlag, setFieldActivity] = useState(false);

  return (
    <>
      <div className="content">
        <div className="search">
          <input type="search" id="search-bar" placeholder="Search for restaurant cuisine, chef" />
          <button className="search-button">
            <img src={search} alt="" className="search-button-logo" />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar