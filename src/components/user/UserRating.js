import React from "react";
import Link from "next/link";

import StarSolid from "@icons/ui/star-solid.js";

import s from "./User.module.scss";

const UserRating = ( props ) => {
    return (
      <div className={s.rating}>
        <span className={s.rating__icon}>
          <StarSolid />
        </span>
        <span  className={s.rating__title}>{props.rate}</span>
        <span  className={s.rating__text}>({props.all})</span>
      </div>
    );
  };

export default UserRating;
