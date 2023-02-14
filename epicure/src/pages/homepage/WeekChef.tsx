import React from "react";
import dataInterface from "../../data/interface";

const WeekChef: React.FC<dataInterface.Chef> = (props) => {
  return (
    <>
      <div className="weeks-chef-container">
        <h2>chef of the week</h2>
        <div className="chef-week-card-container">
            
        </div>
      </div>
    </>
  );
};
export default WeekChef;
