import React from "react";
import CookSolid from "../assets/icons/ui/cook-solid.js";
import TimeSolid from "../assets/icons/ui/time-solid.js";

function User() {
  return <img src="images/default/user.jpg" alt="user image" />
}
function RecipeImg() {
  return <img src="images/default/food.jpg" alt="recipe image" />
}

export default function UserShot() {
  return (
    <div class="shots-wrapper">

    <div class="shot">
    <div class="user-container">
  <div class="user-avatar user-inner">
  <User />
  </div>
  <div class="user-inner">
    <h6>ゴルゴンゾーラとトマトのカプレーゼ</h6>
    <a class="user-link user-text name">ケリー小田</a>
  </div>
  </div>

      <div class="shot-recipe-img">
    <a href="/recipe">
    <RecipeImg class="card"/></a>
    <div class="shot-ingredients-wrapper">
  <span class="shot-ingredients">トマト, ゴルゴンゾーラ, バジル, オリーブオイル, 塩, 黒こしょう, ごぼう, 人参, プロセスチーズ, イチゴ, メロン, キノコ, 小麦粉, メロンジュース</span>
  </div>
    </div>
    <div class="shot-recipe-inner">
    <div class="shot-recipes-bio-wrapper">
    <div class="recipes-inner shot-recipes-data">
            <div class="cook">
      <span class="recipes-ico">
    <CookSolid />1135</span>
    </div>
    <span>・</span>
    <div class="time">
      <span class="recipes-ico">
    <TimeSolid />15分</span>
    </div>
  </div>
    </div>
    </div>
    </div>

</div>
  );
}
