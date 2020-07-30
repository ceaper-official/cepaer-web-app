import React from "react";
import Link from "next/link";

import Block from '@components/block/Block'

import s from "./Hero.module.scss";

function Hero ({ children }) {
    return (
      <div className={s.hero}>
        <Block>
          {children}
        </Block>
      </div>
    );
  }

export default Hero;
