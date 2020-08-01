import React from "react";
import Link from "next/link";

import s from "./Form.module.scss";

const TextArea = (props) => {

  return (
    <textarea
      className={s.textarea}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      type={props.type}
    />
  );
};

export default TextArea;
