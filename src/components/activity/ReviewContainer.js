import React from "react";
import Link from "next/link";

import Rating from "@components/rating/Rating";

import PenSolid from "@icons/ui/pen-solid.js";

function UserImg() {
  return <img src="images/default/user.svg" alt="user image" />;
}

const ReviewContainer = (props) => {
  return (
    <div className="activity-item">
      <div className="badge-wrapper">
        <div className="activity-ico">
          <UserImg />
        </div>
        <span className="badge-ico badge-review">
          <PenSolid />
        </span>
      </div>
      <div className="activity-text-wrapper">
        <div className="activity-text">
          <div className="activity-user-wrapper">
            <Link href="/user">
              <a className="activity-user">{props.user}</a>
            </Link>
            さん
          </div>

          <div className="activity-review-inner">
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
        <span className="activity-date">{props.date}</span>
      </div>
      <div className="activity-img">
        <img src={props.img} />
      </div>
    </div>
  );
};

export default ReviewContainer;
