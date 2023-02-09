import React from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import Login from "./Login";
import SearchBar from "./SearchBar";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="nav-bar">
      <div className="nav-bar-content">
        <button onClick={() => navigate("/")} className="logo"></button>
        <button onClick={() => navigate("/restaurants")} className="links">Restaurants</button>
        <button onClick={() => navigate("/chefs") } className="links">Chefs</button>
        <SearchBar />
        <Login />
        <Cart />
      </div>
    </div>
    </>
  );
};

export default NavBar;
