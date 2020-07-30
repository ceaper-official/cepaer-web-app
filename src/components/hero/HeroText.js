import React from "react";
import Link from "next/link";
import Router from "next/router";

import Block from '@components/block/Block'
import IconButton from "@components/button/IconButton";

import Back from "@icons/ui/back.js";

import s from "./Hero.module.scss";

function HeroText ({ title, children, back }) {
  const isBack = back;
  if (isBack) {
    return (
      <div className={s.hero}>
        <Block>
          <span className={s.hero__back}>
            <IconButton icon=<Back/> onClick={() => Router.back()} plane/>
          </span>
          <h1 className={s.hero__title}>{title}</h1>
          <div className={s.hero__inner}>
            {children}
          </div>
        </Block>
      </div>
    );
  }
    return (
      <div className={s.hero}>
        <Block>
          <h1 className={s.hero__title}>{title}</h1>
          <div className={s.hero__inner}>
            {children}
          </div>
        </Block>
      </div>
    );
  }

export default HeroText;
