import React from "react";
import Link from "next/link";

import CookSolid from "@icons/ui/cook-solid.js";
import TimeSolid from "@icons/ui/time-solid.js";
import StarSolid from "@icons/ui/star-solid.js";

function User() {
  return <img src="images/default/user.svg" alt="user image" />;
}
function RecipeImg() {
  return <img src="images/mock/food.svg" alt="recipe image" />;
}

export default function UserPickupPost() {
  return (
    <Link href="/user">
      <a className="shot card-border card pickup-user">
        <div className="pickup-user-wrapper">
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

          <div className="user-profile">
            <h6 className="user-name">ケリー小田</h6>
            <p className="user-bio">
              私は、料理が大好きな生粋のキャンパーです。週7で、キャンプに行っています！よく出没する場所は高尾山です。
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
