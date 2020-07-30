import React from "react";
import Link from "next/link";

  import s from "./Dropdown.module.scss";

  function DropdownItem ({ href, name, sub, onClick, fix }) {
    const isHref = href;
    if (isHref) {
      return (
        <Link href={href}>
          <a
            className={`${sub ? s.dropdown__item__sub : s.dropdown__item} ${fix ? s.dropdown__item__fix : s.dropdown__item}`}
            onClick={onClick}>
            {name}
          </a>
        </Link>
      );
    }
      return (
          <button
            className={`${sub ? s.dropdown__item__sub : s.dropdown__item} ${fix ? s.dropdown__item__fix : s.dropdown__item}`}
            onClick={onClick}>
            {name}
          </button>
      );
    }

export default DropdownItem;
