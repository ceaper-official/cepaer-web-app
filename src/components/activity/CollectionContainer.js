import React from "react";
import Link from "next/link";
import CollectionSolid from "@icons/ui/collection-solid.js";

function UserImg() {
  return <img src="images/default/user.svg" alt="user image" />;
}

const CollectionContainer = (props) => {
  return (
    <div className="activity-item">
      <div className="badge-wrapper">
        <div className="activity-ico">
          <UserImg />
        </div>
        <span className="badge-ico badge-collection">
          <CollectionSolid />
        </span>
      </div>
      <div className="activity-text-wrapper">
        <p className="activity-text">
          <div className="activity-user-wrapper">
            <Link href="/user">
              <a className="activity-user">{props.user}</a>
            </Link>
            さん
          </div>
          <div>
            <Link href="/recipe">
              <a className="activity-recipe">{props.recipe}</a>
            </Link>
            をコレクションに追加しました。
          </div>
        </p>
        <span className="activity-date">{props.date}</span>
      </div>

      <div className="activity-img">
        <img src={props.img} />
      </div>
    </div>
  );
};

export default CollectionContainer;
