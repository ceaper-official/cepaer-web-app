import React from "react";

import Label from "@components/form/Label";

import s from "./Form.module.scss";

const FormItem = (props) => {
  return (
    <div className={s.form__item}>
      {props.label ? <Label>{props.label}</Label>:''}
      {props.children}
    </div>
  );
};

export default FormItem;
