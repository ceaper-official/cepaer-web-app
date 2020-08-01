import React from "react";

import s from "./Form.module.scss";

const Label = (props) => {
  return (
    <p className={s.label}>
      {props.children}
    </p>
  );
};

export default Label;
