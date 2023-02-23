import React from "react";
import FilterButton from "../../components/FilterButton";
import { getServiceDishes, reInitializeDishes } from "../../features/dishesSlicer";

const DishesFilters: React.FC = () => {
  return (
    <>
      <div className="filters">

      <FilterButton
          init={reInitializeDishes}
          function={()=>getServiceDishes('BreakFast')}
          text={"BreakFast"}
        />
        <FilterButton
          init={reInitializeDishes}
          function={()=>getServiceDishes('Lunch')}
          text={"Lunch"}
        />
        <FilterButton
          init={reInitializeDishes}
          function={()=>getServiceDishes('Dinner')}
          text={"Dinner"}
        />
      </div>
    </>
  );
};

export default DishesFilters;
