import React from "react";

import s from "./Dropdown.module.scss";

export default function Dropdown({ button, children }) {
  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div className={s.dropdown} onClickAway={handleClickAway}>
      <div onClick={toggle} className={s.dropdown__button}>
        {button}
      </div>
      {open ? <div className={s.dropdown__inner}>{children}</div> : null}
    </div>
  );
}
