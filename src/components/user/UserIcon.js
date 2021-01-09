import React from "react";

import { auth, firebase } from "@src/firebase";

import s from "./User.module.scss";

function UserIcon({ small, large, icon, onClick }) {
  return (
    <div
      className={
        (small ? s.user__icon__s : s.user__icon,
        large ? s.user__icon__l : s.user__icon)
      }
      onClick={onClick}
    >
      <img src={icon} alt="user image" onError={(e) => e.target.src = "images/default/user.svg"} />
          </div>
  );
}

export default UserIcon;
