import React from "react";
import Link from "next/link";

import s from "./Form.module.scss";

const Input = (props) => {
  const isSub = props.sub;
  const isPs = props.ps;
  if (isSub) {
    return (
      <div className={s.input__container}>
        <span className={s.input__prefix}>
          {props.icon}
        </span>
        <input
          className={s.input}
          placeholder={props.placeholder}
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
  return (
    <div className={s.input__container}>
      <span className={s.input__prefix}>
        {props.icon}
      </span>
      <input
        className={s.input}
        placeholder={props.placeholder}
        onChange={props.onChange}
        type={(isPs ? "password" : "")}
      />
    </div>
  );
};

export default Input;
