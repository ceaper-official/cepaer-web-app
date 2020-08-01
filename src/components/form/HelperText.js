import React from "react";
import Link from "next/link";

import s from "./Form.module.scss";

const HelperText = (props) => {
  return (
    <p className={s.helper__text}>
      {props.children}
      {props.strong ? <strong className={s.helper__strong}>{props.strong}</strong>:''}
    </p>
  );
};

export default HelperText;
