import React from "react";

function Ad() {
  return <img src="images/mock/food.svg" alt="" />;
}

const Column2 = (props) => {
  return (
    <div className="contents">
      <div className="section">
        <div className="ad-2col">
          <div className="ad-2col-inner">{props.children}</div>
          <div className="ad-2col-inner">
            <div className="ad-2col-ad">
              <Ad />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column2;
