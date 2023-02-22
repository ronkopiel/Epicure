import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ChefCard from "../../components/ChefCard";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { IChef, IChefsState } from "../../data/interface";
import { IRootState } from "../../store";
import ChefFilters from "./ChefFilters";

const Chefs: React.FC = () => {
  const chefs: IChefsState["value"] = useSelector(
    (state: IRootState) => state.chefs.changedValue
  );
  useEffect(() => console.log(chefs), [chefs]);
  return (
    <>
      <NavBar />
      <div className="page-container">
        <ChefFilters />
        <div className="grid">
          {chefs.map((chef: IChef, index: number) => {
            return (
              <ChefCard
                chef = {chef}
                key={index}
                size={"small"}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Chefs;
