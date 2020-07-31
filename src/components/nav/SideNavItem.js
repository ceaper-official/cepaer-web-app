import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import s from "./Nav.module.scss";

function SideNavItem ({ href, title}) {
  const router = useRouter();
    return (
      <div className={ ` ${s.side__nav__item} ${router.pathname == href ? "active" : ""}`}>
        <Link href={href}>
          <a className={s.side__nav__link}>
            {title}
          </a>
        </Link>
      </div>
    );
  }

export default SideNavItem;
