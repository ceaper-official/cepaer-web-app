import React from "react";

import Block from "@components/block/Block";

import s from "./User.module.scss";

const SliderPostContainer = (props) => {
  return (
    <div className={s.slider}>
      <div className={s.slider__inner}>{props.children}</div>
    </div>
  );
};

export default SliderPostContainer;
