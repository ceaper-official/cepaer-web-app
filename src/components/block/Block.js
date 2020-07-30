import React from "react";

import s from "./Block.module.scss";

const Block = (props) => {
  return (
    <div className={s.block}>
      {props.children}
    </div>
  );
};

export default Block;
