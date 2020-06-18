import React from "react";
import Link from "next/link";

function RecipeImg() {
  return <img src="images/mock/food.jpg" alt="recipe image"/>;
}

export default function UserCollection() {
  return (

    <Link href="/collection">
    <a className="shot-wrapper">
    <div className="topic shot">
    <div className="shot-img">
      <RecipeImg/>
    </div>
    <div className="shot-img">
      <RecipeImg/>
    </div>
    <div className="shot-img">
      <RecipeImg/>
    </div>
  </div>
  <h3  className="collection-title">ダイエットに効果的な料理</h3>
    <span  className="collection-data">30レシピ</span>
</a>
</Link>
);

}
