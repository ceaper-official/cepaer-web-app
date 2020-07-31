import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import s from "./MobileNav.module.scss";

function MobileNavItem ({ icon, title, href}) {
  const router = useRouter();
  return (
    <div className={s.mobile__nav__item}>
      <Link href={href}>
        <a className={(router.pathname == {href} ? s.active: '')}>
          <span className={s.mobile__nav__icon}>
            {icon}
          </span>
          <h6 className={s.mobile__nav__title}>
            {title}
          </h6>
        </a>
      </Link>
    </div>
  );
}

export default MobileNavItem;
