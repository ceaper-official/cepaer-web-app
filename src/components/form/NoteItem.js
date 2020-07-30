import React from "react";

import s from "./CardForm.module.scss";

const NoteItem = (props) => {
  return (
    <p className={s.note__item}>
      {props.children}
    </p>
  );
};

export default NoteItem;
