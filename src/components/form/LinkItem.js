import React from "react";
import Link from "next/link";

import s from "./CardForm.module.scss";

const LinkItem = (props) => {
  return (
    <div className={s.link__item}>
      <p className={s.link__item__title}>{props.title}</p>
      <Link href={props.href}>
        <a className={s.link__item__text}>{props. text}</a>
      </Link>
    </div>
  );
};

export default LinkItem;
