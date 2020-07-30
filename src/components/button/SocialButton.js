import React from "react";
import Link from "next/link";

import s from "./SocialButton.module.scss";

function SocialButton ({onClick, children, icon}) {
    return (
        <button className={s.social__button} onClick={onClick}>
          <span className={s.social__button__prefix}>
            {icon}
          </span>
          <span className={s.social__button__inner}>
            {children}
          </span>
        </button>
    );
  }

export default SocialButton;
