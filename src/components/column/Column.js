import React from "react";

import s from "./Column.module.scss";

function Column ({ children, col2, col3, col3Fix, button, sidenav}) {
  const isButton = button;
  const isSideNav = sidenav;
  if (isButton) {
    return (
      <div className={s.button__column}>
        {children}
      </div>
    );
  }
  if (isSideNav) {
    return (
      <div className={s.side__nav__column}>
        {children}
      </div>
    );
  }
  return (
    <div className={`${col2 ? s.column2 : s.column} ${col3 ? s.column3 : s.column} ${col3Fix ? s.column3__fix : s.column} `}>
      {children}
    </div>
  );
}

export default Column;
