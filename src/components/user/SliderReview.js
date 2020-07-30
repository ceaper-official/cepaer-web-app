import React from "react";
import Link from 'next/link';

import UserContainer from '@components/user/UserContainer';

import s from "./User.module.scss";

function UserImg() {
  return <img src="images/default/user.svg" alt="ユーザー　アイコン" />;
}

export default function SliderReview() {
  return (
    <div className={s.slider__item}>
      <div className={s.card}>
        <p>
          美味しいです。ご飯にも合う味でした！もう一品欲しいときに便利！
        </p>
        <UserContainer
          title="ジャスミン"
          children="2020.06.12"
        />
      </div>
 </div>
  );
}
