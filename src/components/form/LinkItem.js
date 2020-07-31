import React from "react";
import Link from "next/link";

import Button from "@components/button/Button"

import s from "./CardForm.module.scss";

const LinkItem = (props) => {
  return (
    <div className={s.link__item}>
      <p className={s.link__item__title}>{props.title}</p>
      <Button outline small href={props.href}>
        {props. text}
      </Button>
    </div>
  );
};

export default LinkItem;
