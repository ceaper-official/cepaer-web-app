import React from "react";
import Link from "next/link";

import s from "./User.module.scss";

export default function UserCollection( props ) {
  return (
    <div className={s.collection__post}>
      <Link href={props.href}>
        <a className={s.img__container}>
          <div className={s.img}>
            {props.img}
          </div>
          <div className={s.img}>
            {props.img}
          </div>
          <div className={s.img}>
            {props.img}
          </div>
        </a>
      </Link>
      <h6 className={s.title}>{props.title}</h6>
      <span className={s.text}>{props.all}レシピ</span>
   </div>
 );
}
