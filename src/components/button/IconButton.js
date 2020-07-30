import React from "react";
import Link from "next/link";

import s from "./Button.module.scss";

function IconButton ({ href, onClick, icon, plane }) {
  const isHref = href;
  if (isHref) {
    return (
      <Link href={href}>
        <a
          className={(plane ? s.icon__button__plane : s.icon__button)}
          onClick={onClick}>
          {icon}
        </a>
      </Link>
    );
  }
    return (
        <button
          className={(plane ? s.icon__button__plane : s.icon__button)}
          onClick={onClick}>
          {icon}
        </button>
    );
  }

export default  IconButton;
