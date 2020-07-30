import React from "react";

import s from "./Recipe.module.scss";

const MakeContainer = ( props ) => {
  return (
    <div className={s.make__container}>
      {props.children}
    </div>
  );
};

export default MakeContainer;
