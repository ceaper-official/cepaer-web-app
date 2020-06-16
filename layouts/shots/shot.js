import React from "react";
import CookSolid from "../../assets/icons/ui/cook-solid.js";
import TimeSolid from "../../assets/icons/ui/time-solid.js";
import StarSolid from "../../assets/icons/ui/star-solid.js";

function User() {
  return <img src="images/default/user.svg" alt="user image" />;
}
function RecipeImg() {
  return <img src="images/mock/food.svg" alt="recipe image" />;
}

export default function UserShot() {
  return (
    <a
      href=""
      className="topic shot"
      style={{
        padding: 0,
      }}
    >
      <div className="shot-img">
        <RecipeImg />
      </div>
      <div className="recipe-inner card-wrapper">
        <div className="shot-title-wrapper">
          <h6>ゴルゴンゾーラとトマトのカプレーゼ</h6>
          <div className="user-link">
            <div className="user-container">
              <div
                className="user-avatar user-inner"
                style={{
                  margin: 0,
                }}
              >
                <User />
              </div>
            </div>
          </div>
        </div>

        <div className="shot-bio-wrapper">
          <div className="time">15分</div>
          <div className="rating">
            <span className="ico">
              <StarSolid />
            </span>
            <span id="rating-data">4.3</span>
            <span id="reviews-data">(100)</span>
          </div>
        </div>

        <div class="shot-ingredients-wrapper">
          <p class="shot-ingredients">
            トマト, ゴルゴンゾーラ, バジル, オリーブオイル, 塩, 黒こしょう,
            トマト, ゴルゴンゾーラ, バジル, オリーブオイル, 塩, 黒こしょう,
            トマト, ゴルゴンゾーラ, バジル, オリーブオイル, 塩, 黒こしょう
          </p>
        </div>
      </div>
    </a>
  );
}
