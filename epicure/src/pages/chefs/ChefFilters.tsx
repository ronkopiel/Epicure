import React from "react";
import FilterButton from "../../components/FilterButton";
import {
  getNewChefs,
  reInitializeChefs,
  sortViewCount,
} from "../../features/chefsSlicer";

const ChefFilters: React.FC = () => {
  return (
    <div className="filters-container">
      <div className="filters">
        <FilterButton
          function={reInitializeChefs}
          text={"All"}
        />
        <FilterButton
          function={getNewChefs}
          text={"New"}
        />
        <FilterButton
          function={sortViewCount}
          text={"Most Viewd"}
        />
      </div>
    </div>
  );
};

export default ChefFilters;
