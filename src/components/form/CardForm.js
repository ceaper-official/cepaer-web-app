import React from "react";

import s from "./CardForm.module.scss";

const CardForm = (props) => {
  return (
    <div className={s.card__form}>
      <h1 className={s.title}>{props.title}</h1>
      <div className={s.container}>
        {props.children}
      </div>
    </div>
  );
};

export default CardForm;
