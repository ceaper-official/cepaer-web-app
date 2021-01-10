import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Router from "next/router";
import Link from "next/link";

import BaseLayout from "@components/layout/BaseLayout";
import HeroText from "@components/hero/HeroText";
import UserPost from "@components/user/USerPost";
import UserPostContainer from "@components/user/UserPostContainer";

import Instagram from "@icons/social/instagram.js";
import Facebook from "@icons/social/facebook.js";
import Twitter from "@icons/social/twitter.js";
import Arrow from "@icons/ui/arrow.js";
import ShareSolid from "@icons/ui/share-solid.js";
import PenSolid from "@icons/ui/pen-solid.js";
import OtherSolid from "@icons/ui/other-solid.js";

function UserImg() {
  return <img src="images/default/user.svg" alt="user image" />;
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <BaseLayout>
        <HeroText title="お気に入り">
          <p>30レシピ</p>
        </HeroText>

        <UserPostContainer>
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
        </UserPostContainer>

        <style jsx>{`
          .button-wrapper {
            display: flex;
            justify-contents: space-between;
          }
        `}</style>
      </BaseLayout>
    );
  }
}

export default Counter;
