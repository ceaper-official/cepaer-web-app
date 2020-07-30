import React from "react";

const Notice = (props) => {
  return (
    <div className="notice">
      <h6 className="notice-message">{props.children}</h6>
    </div>
  );
};

export default Notice;
