import React from "react";
import CookSolid from "../assets/icons/ui/cook-solid.js";
import TimeSolid from "../assets/icons/ui/time-solid.js";

function User() {
  return <img src="images/default/user.jpg" alt="user image" />;
}
function RecipeImg() {
  return <img src="images/mock/food.jpg" alt="recipe image" />;
}

export default function UserShot() {
  return (
    <div className="shots-wrapper">
      <div className="shot">
        <div className="user-container">
          <div className="user-avatar user-inner">
            <User />
          </div>
          <div className="user-inner">
            <h6>ゴルゴンゾーラとトマトのカプレーゼ</h6>
            <a className="user-link user-text name">ケリー小田</a>
          </div>
        </div>

        <div className="shot-recipe-img">
          <a href="/recipe">
            <RecipeImg className="card" />
          </a>
          <div className="shot-ingredients-wrapper">
            <span className="shot-ingredients">
              トマト, ゴルゴンゾーラ, バジル, オリーブオイル, 塩, 黒こしょう,
              ごぼう, 人参, プロセスチーズ, イチゴ, メロン, キノコ, 小麦粉,
              メロンジュース
            </span>
          </div>
        </div>
        <div className="shot-recipe-inner">
          <div className="shot-recipes-bio-wrapper">
            <div className="recipes-inner shot-recipes-data">
              <div className="cook">
                <span className="recipes-ico">
                  <CookSolid />
                  1135
                </span>
              </div>
              <span>・</span>
              <div className="time">
                <span className="recipes-ico">
                  <TimeSolid />
                  15分
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
