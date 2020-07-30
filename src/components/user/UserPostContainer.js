import React from "react";

import Block from "@components/block/Block";

import s from "./User.module.scss";

const UserPostContainer = (props) => {
  return (
    <Block>
      <div className={s.post__container}>{props.children}</div>
    </Block>
  );
};

export default UserPostContainer;
