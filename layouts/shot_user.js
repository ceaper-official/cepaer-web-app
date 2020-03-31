import React from "react";
import Cook from "../assets/icons/ui/cook.js";
import Time from "../assets/icons/ui/time.js";

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
    </div>
    <div class="shot-recipe-inner">
    <div class="recipes-bio-wrapper">
    <div class="recipes-inner recipes-data">
            <div class="cook">
      <span class="recipes-ico">
    <Cook />1135</span>
    </div>
    <span>・</span>
    <div class="time">
      <span class="recipes-ico">
    <Time />15分</span>
    </div>
  </div>
    </div>
    </div>
    </div>

</div>
  );
}
