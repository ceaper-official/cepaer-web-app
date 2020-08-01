import React from "react";
import Link from "next/link";

import Check from "@icons/ui/check";

import s from "./Checkbox.module.scss";

const Checkbox = ( props ) => {

  return (
    <div className={s.checkbox__container}>
      <div className={s.checkbox__inner}>
        <input
          className={s.checkbox}
          onChange={props.onChange}
          type="checkbox"
        />
        <span className={s.checkbox__icon}><Check/></span>
      </div>
      <span className={s.checkbox__text}>{props.text}</span>
    </div>
  );
};

export default Checkbox;
