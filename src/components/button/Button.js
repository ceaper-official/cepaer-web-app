import React from "react";
import Link from "next/link";

import s from "./Button.module.scss";

function Button ({ href, onClick, children, outline, small }) {
  const isHref = href;
  if (isHref) {
    return (
      <Link href={href}>
        <a className={` ${outline ? s.button__outline : s.button} ${small ? s.button__small : s.button}`} onClick={onClick}>
          {children}
        </a>
      </Link>
    );
  }
    return (
        <button className={` ${outline ? s.button__outline : s.button} ${small ? s.button__small : s.button}`}  onClick={onClick}>
          {children}
        </button>
    );
  }

export default Button;
