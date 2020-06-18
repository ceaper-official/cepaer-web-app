import React from "react";
import BaseLayout from "../layouts/base.js";
import Link from "next/link";
import Instagram from "../assets/icons/social/instagram.js";
import Facebook from "../assets/icons/social/facebook.js";
import Twitter from "../assets/icons/social/twitter.js";
import Arrow from "../assets/icons/ui/arrow.js";
import ShareSolid from "../assets/icons/ui/share-solid.js";
import PenSolid from "../assets/icons/ui/pen-solid.js";
import OtherSolid from "../assets/icons/ui/other-solid.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Router from "next/router";
import UserShot from "../layouts/shots/shot.js";

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
        <div id="page">
          <div className="contents">
            <div className="section">
              <a
                onClick={() => Router.back()}
                className="back-button ico-button"
              >
                <Arrow />
              </a>
              {/*コレクション名*/}
              <div className="button-wrapper">
                <h1 className="hero-title">ダイエットに効果的な料理</h1>
                <div className="dropdown-wrapper">
                  <button className="ico-button" onClick={this.toggle}>
                    <OtherSolid />
                  </button>
                  <div
                    className={
                      this.state.open
                        ? "dropdown-contents open card"
                        : "dropdown-contents hide card"
                    }
                  >
                    <div className="dropdown-list">
                      <a href="" className="dropdown-item">
                        編集する
                      </a>
                      <a href="" className="dropdown-item">
                        コレクションを削除
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <span className="collection-data">30レシピ</span>
            </div>
          </div>

          <div className="contents">
            <div className="section">
              <div className="shots-wrapper">
                <UserShot />
                <UserShot />
                <UserShot />
                <UserShot />
                <UserShot />
                <UserShot />
                <UserShot />
                <UserShot />
              </div>
            </div>
          </div>
          <style jsx>{`
            .button-wrapper {
              display: flex;
              justify-contents: space-between;
            }
          `}</style>
        </div>
      </BaseLayout>
    );
  }
}

export default Counter;
