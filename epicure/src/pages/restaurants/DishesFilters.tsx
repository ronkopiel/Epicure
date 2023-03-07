import React from "react";
import FilterButton from "../../components/FilterButton";
import { setServiceDishes } from "../../features/dishesSlicer";


const DishesFilters: React.FC = () => {
  return (
    <>
      <div className="filters">

      <FilterButton
          function={()=>setServiceDishes('Breakfast')}
          text={"Breakfast"}
        />
        <FilterButton
          function={()=>setServiceDishes("Lunch")}
          text={"Lunch"}
        />
        <FilterButton
          function={()=>setServiceDishes("Dinner")}
          text={"Dinner"}
        />
      </div>
    </>
  );
};

export default DishesFilters;
