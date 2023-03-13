import React from "react";
import { useDispatch } from "react-redux";

interface IFilterButton {
  function: Function;
  text: string;
}
const FilterButton: React.FC<IFilterButton> = (props) => {
  const dispatch = useDispatch();
  return (
    <button
      className="filter"
      onClick={() => {
        dispatch(props.function(props.text));
        console.log(props.function());
      }}
    >
      {props.text}
    </button>
  );
};

export default FilterButton;
