import React from "react";
import Link from "next/link";

function UserImg() {
  return <img src="images/default/user.svg" alt="user image" />;
}

const ActivityLike = (props) => {
  return (
    <div className="activity-item">
      <div className="activity-ico">
        <UserImg />
      </div>
      <div className="activity-text-wrapper">
        <p className="activity-text">
          <Link href="/user">
            <a className="activity-user">{props.user}</a>
          </Link>
          さんが、
          <Link href="/recipe">
            <a className="activity-recipe">{props.recipe}</a>
          </Link>
          をお気に入りに追加しました。
        </p>
      </div>
      <span className="activity-date">{props.date}</span>
    </div>
  );
};

export default ActivityLike;
