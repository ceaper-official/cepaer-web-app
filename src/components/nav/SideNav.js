import React, { useState } from 'react';
import Link from "next/link";

import Down from '@icons/ui/down'
import s from "./Nav.module.scss";

function  SideNav ({children}) {

  const [open, setContentState] = useState(false);

  return (
    <>
    <div className={open ? s.open : ''}>
      <span
        className={s.side__nav__icon}
        onClick={() => setContentState(!open)}>
          <Down/>
      </span>
    </div>
    <div className={open ? s.open : ''}>
      <div className={s.side__mobile__nav}>
        {children}
      </div>
    </div>
    <div className={s.side__nav}>
      {children}
    </div>
    </>
  );
}

export default SideNav;
