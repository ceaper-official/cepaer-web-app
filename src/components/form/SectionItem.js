import React from "react";

import s from "./CardForm.module.scss";

const SectionItem = (props) => {
  return (
    <h6 className={s.section__item}>
      {props.title}
    </h6>
  );
};

export default SectionItem;
