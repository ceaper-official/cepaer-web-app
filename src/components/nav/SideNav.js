import React from "react";
import Link from "next/link";

import s from "./Nav.module.scss";

function  SideNav ({children}) {
  return (
    <div className={s.side__nav}>
      {children}
    </div>
  );
}

export default SideNav;
