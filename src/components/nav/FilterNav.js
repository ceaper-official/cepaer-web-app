import React from "react";

const FilterNav = (props) => {
  return (
    <div className="filter-menu">
      <div className="section">{props.children}</div>
    </div>
  );
};

export default FilterNav;
