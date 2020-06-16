import React from "react";

function UserImg() {
  return <img src="images/default/user.svg" alt="ユーザー　アイコン" />;
}

export default function Review() {
  return (
    <div className="review shot card-wrapper card card-border">
      <div className="recipes-inner">
        <p className="s-text comment">
          美味しいです。ご飯にも合う味でした！もう一品欲しいときに便利！
        </p>
        <a className="user-link">
          <div className="user-container">
            <div className="user-avatar user-inner">
              <UserImg />
            </div>
            <div className="user-inner">
              <p className="user-text name">ケリー小田</p>
              <p
                className="user-text date"
                style={{
                  margin: 0,
                }}
              >
                2020.06.12
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
