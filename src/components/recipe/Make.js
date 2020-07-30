import React from "react";

import Card from "@components/card/Card"
import s from "./Recipe.module.scss";

const Make = ( props ) => {
  return (
    <div className={s.make__card}>
      <p className={s.make}>
        {props.children}
      </p>
    </div>
  );
};

export default Make;
