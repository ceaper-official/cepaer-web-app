import React from "react";
import Link from "next/link";
import Router from "next/router";

import Block from "@components/block/Block";
import UserIcon from "@components/user/UserIcon";
import Button from "@components/button/Button";

import Instagram from "@icons/social/instagram.js";
import Facebook from "@icons/social/facebook.js";
import Twitter from "@icons/social/twitter.js";
import SettingSolid from "@icons/ui/setting-solid.js";

import s from "./Hero.module.scss";

function HeroUser({ icon, name, bio, instagram, facebook, twitter }) {
  return (
    <Block>
      <div className={`${s.hero} ${s.hero__profile} `}>
        <div className={s.hero__profile__container}>
          <UserIcon large icon={icon} />
          <div className={s.hero__profile__inner}>
            <h1 className={s.title}>{name}</h1>
            <p className={s.text}>{bio}</p>
            <div className={s.hero__icon__container}>
              {instagram ? (
                <a target="_blank" rel="noopener noreferrer" href={instagram}>
                  <Instagram />
                </a>
              ) : (
                ""
              )}
              {facebook ? (
                <a target="_blank" rel="noopener noreferrer" href={facebook}>
                  <Facebook />
                </a>
              ) : (
                ""
              )}
              {twitter ? (
                <a target="_blank" rel="noopener noreferrer" href={twitter}>
                  <Twitter />
                </a>
              ) : (
                ""
              )}
            </div>
            {/*現在ログイン中のアカウントのみ表示*/}
            <Button href=" /edit" outline>
              <SettingSolid />
              プロフィールを編集
            </Button>
          </div>
        </div>
      </div>
    </Block>
  );
}

export default HeroUser;
