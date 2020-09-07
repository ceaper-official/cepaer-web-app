import React from "react";
import Link from "next/link";

import Arrow from "@icons/ui/arrow";

import s from "./Button.module.scss";

function ArrowButton ({ to, onClick, text }) {

  const isHref = to;

  if (isHref) {
    return (
      <Link to={to}>
        <a className={s.arrow__button} onClick={onClick}>
          {text}
          <Arrow className={s.arrow__button__icon}/>
        </a>
      </Link>
    );
  }

    return (
        <button className={s.arrow__button} onClick={onClick}>
          {text}
          <Arrow className={s.arrow__button__icon}/>
        </button>
    );
  }

export default ArrowButton;
