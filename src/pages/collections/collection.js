import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Router from "next/router";

import BaseLayout from "@components/layout/BaseLayout";
import HeroText from "@components/hero/HeroText";
import UserPost from "@components/user/UserPost";
import IconButton from "@components/button/IconButton";

import Instagram from "@icons/social/instagram.js";
import Facebook from "@icons/social/facebook.js";
import Twitter from "@icons/social/twitter.js";
import Back from "@icons/ui/back.js";
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
        <HeroText title="ダイエットに効果的な料理" back>
          <p>30コレクション</p>
        </HeroText>
          
          <div className="contents">
            <div className="section">
              <div className="shots-wrapper">
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
              </div>
            </div>
          </div>
      </BaseLayout>
    );
  }
}

export default Counter;
