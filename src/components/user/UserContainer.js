import React from "react";
import Link from "next/link";

import UserIcon  from "@components/user/UserIcon";

import s from "./User.module.scss";

const UserContainer = ( props ) => {
    return (
        <div className={s.user__container}>
          <UserIcon/>
          <div className={s.user__container__inner}>
            <h6 className={s.user__container__title}>{props.title}</h6>
            <span className={s.user__container__text}>{props.children}</span>
          </div>
        </div>
    );
  };

export default UserContainer;
