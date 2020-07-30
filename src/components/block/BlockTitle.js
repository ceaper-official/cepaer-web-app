import React from "react";

import s from "./Block.module.scss";

const BlockTitle = (props) => {
  return (
    <h3 className={s.block__title}>{props.children}</h3>
  );
};

export default BlockTitle;
