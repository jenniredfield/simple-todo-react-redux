import React from "react";

const FilterButton = props => {
  const { value, changeSelected, filter, text } = props;
  const isSelectedClass =
    filter === value ? "Todo-control__button--selected" : "";

  return (
    <button
      value={value}
      onClick={changeSelected}
      className={`Todo-control__button ${isSelectedClass}`}
    >
      {text}
    </button>
  );
};

export default FilterButton;
