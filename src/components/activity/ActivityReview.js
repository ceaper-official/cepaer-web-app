import React from "react";
import Link from "next/link";

import Rating from "@components/rating/Rating";

function UserImg() {
  return <img src="images/default/user.svg" alt="user image" />;
}

const ActivityReview = (props) => {
  return (
    <div className="activity-item">
      <div className="activity-ico">
        <UserImg />
      </div>
      <div className="activity-text-wrapper activity-review-wrapper">
        <div className="activity-text">
          <div>
            <Link href="/user">
              <a className="activity-user">{props.user}</a>
            </Link>
            さんがレビューしました。
          </div>

          <div className="activity-review-inner">
            <div className="activity-review-img">
              <img src={props.img} />
            </div>
            <div>
              <div>
                <Link href="/recipe">
                  <a className="activity-recipe">{props.recipe}</a>
                </Link>
                <div className="activitiy-rating">
                  <Rating />
                </div>
              </div>
              <p className="activity-review">{props.children}</p>
            </div>
          </div>
        </div>
      </div>
      <span className="activity-date">{props.date}</span>
    </div>
  );
};

export default ActivityReview;
