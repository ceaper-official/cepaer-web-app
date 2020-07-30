import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Router from "next/router";

import BaseLayout from "@components/layout/BaseLayout";
import HeroText from "@components/hero/HeroText";
import UserPost from "@components/user/UserPost";
import UserPostContainer from "@components/user/UserPostContainer";
import UserCollection from "@components/user/UserCollection";
import CollectionContainer from "@components/container/CollectionContainer";

import Instagram from "@icons/social/instagram.js";
import Facebook from "@icons/social/facebook.js";
import Twitter from "@icons/social/twitter.js";
import Arrow from "@icons/ui/arrow.js";
import ShareSolid from "@icons/ui/share-solid.js";
import PenSolid from "@icons/ui/pen-solid.js";
import Add from "@icons/ui/add.js";
import OtherSolid from "@icons/ui/other-solid.js";
import Cross from "@icons/ui/cross.js";

function UserImg() {
  return <img src="images/default/user.svg" alt="user image" />;
}

function RecipeImg() {
  return <img src="images/mock/food.jpg" alt="recipe image" />;
}

class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showPopup: false,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <BaseLayout>
        <HeroText title="コレクション">
          <p>30コレクション</p>
        </HeroText>
        <UserPostContainer>
          <UserCollection
            title="ダイエットに効果的な料理100選"
            all="45"
            href="/collections/collection"
            img=<RecipeImg/>
          />
        </UserPostContainer>

          <button
            className="ico-button"
            id="fixed-button"
            onClick={this.togglePopup.bind(this)}
          >
            <Add />
          </button>
          {this.state.showPopup ? (
            <Popup closePopup={this.togglePopup.bind(this)} />
          ) : null}
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

export default Collections;

class Popup extends React.Component {
  render() {
    return (
      <div id="create-collection" className="popup-row">
        <div className="popup-row-bg" onClick={this.props.closePopup}></div>
        <div className="popup-wrapper">
          <div className="popup-inner card">
            <button className="popup-row-close" onClick={this.props.closePopup}>
              <Cross />
            </button>
            <h1>コレクションを新規作成</h1>
            <input className="input-inner" placeholder="コレクション名" />

            <button
              className="button-ol create-button"
              onClick={this.props.closePopup}
            >
              コレクションを作成
            </button>
          </div>
        </div>
        <style jsx>{`
          .popup-inner {
            max-width: 500px;
          }
          #added-collection {
            display: none;
          }
          .create-button {
            margin-top: 3rem;
          }
        `}</style>
      </div>
    );
  }
}
