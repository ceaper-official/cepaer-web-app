import React from "react";
import Link from "next/link";

import s from "./Form.module.scss";

const Input = (props, icon) => {
  const isSub = props.sub;
  const isPs = props.ps;
  const isIcon = props.icon;
  const isCheckbox = props.checkbox;

  if (isSub) {
    return (
      <div className={s.input__container}>
        <span className={s.input__prefix}>
          {props.icon}
        </span>
        <input
          className={s.input__icon}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          type={(isPs ? "password" : "")}
        />
        <span className={s.input__suffix}>
          <Link href= {props.href}>
            <a className={s.input__subtext}>{props.sub}</a>
          </Link>
        </span>
      </div>
    );
  }

  if (isIcon) {
    return (
      <div className={s.input__container}>
        <span className={s.input__prefix}>
          {props.icon}
        </span>
        <input
          className={s.input__icon}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          type={(isPs ? "password" : "")}
        />
      </div>
    );
  }

  if (isCheckbox) {
    return (
      <div className={s.checkbox}>
        <input
          className={s.checkbox__input}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          type="checkbox"
        />
      </div>
    );
  }

  return (
    <div className={s.input__container}>
      <input
        className={s.input}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        type={(isPs ? "password" : "")}
      />
    </div>
  );
};

export default Input;
