import React from "react";
import { useRouter, Router } from "next/router";
import Link from "next/link";

import Button from "@components/button/Button";

import Logo from "@icons/logo.js";
import HumanSolid from "@icons/ui/human-solid.js";
import CollectionSolid from "@icons/ui/collection-solid.js";
import Like from "@icons/ui/like.js";
import LikeSolid from "@icons/ui/like-solid.js";
import Cross from "@icons/ui/cross.js";
import Add from "@icons/ui/add.js";
import StarSolid from "@icons/ui/star-solid.js";

import s from "./Header.module.scss";

class GetStartedHeader extends React.Component {

  render() {
    return (
        <header className={s.header} disableInlineStyles>
          <div className={s.header__container}>
            <HeaderLogo />
            <HeaderContents />
            </div>
        </header>
    );
  }
}

export default GetStartedHeader;

function HeaderLogo() {
  return (
      <span className={s.header__logo}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </span>
  );
}

function HeaderContents() {
  return (
    <div className="nav-inner nav-inner-desktop">
      <div className="nav-controls">
        <div className={s.header__item}>
          <Button href="/signin" outline small>
            既にアカウントをお持ちですか？
          </Button>
        </div>
      </div>
    </div>
  );
}
