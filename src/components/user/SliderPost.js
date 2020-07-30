import React from "react";
import Link from "next/link";

import UserIcon from "@components/user/UserIcon";
import UserRating from "@components/user/UserRating";

import StarSolid from "@icons/ui/star-solid.js";

import s from "./User.module.scss";

function User() {
  return <img src="images/default/user.svg" alt="user image" />;
}
function RecipeImg() {
  return <img src="images/mock/food.svg" alt="recipe image" />;
}

export default function SliderPost() {
  return (
     <div className={s.slider__item}>
    <div className={s.post}>
    <Link href="/recipe">
    <a>
      <div className={s.post__img}>
        <RecipeImg />
      </div>

      <div className={s.post__inner}>
        <div className={s.post__title__container}>
          <h6  className={s.post__title}>ゴルゴンゾーラとトマトのカプレーゼ</h6>
          <Link href="/user">
            <UserIcon small/>
          </Link>
        </div>
        <div className={s.post__sub__container}>
          <span className={s.post__time}>15分</span>
          <UserRating rate="4.4" all="123"/>
        </div>
        <span class={s.ingredients}>
          トマト, ゴルゴンゾーラ, バジル, オリーブオイル, 塩, 黒こしょう,トマト, ゴルゴンゾーラ, バジル, オリーブオイル, 塩, 黒こしょう,トマト, ゴルゴンゾーラ, バジル, オリーブオイル, 塩, 黒こしょう
        </span>
      </div>
    </a>
  </Link>
</div>
</div>
  );
}
