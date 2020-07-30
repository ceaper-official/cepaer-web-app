import React from "react";

const CollectionContainer = (props) => {
  return (
    <div className="contents">
      <div className="section">
        <div className="shots-wrapper collection-wrapper">{props.children}</div>
      </div>
    </div>
  );
};

export default CollectionContainer;
