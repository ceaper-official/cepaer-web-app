import React from "react";
import Link from "next/link";

import BaseLayout from "@components/layout/BaseLayout";
import UserPost from "@components/user/UserPost";
import SliderPickupUser from "@components/user/SliderPickupUser";
import SliderPostContainer from "@components/user/SliderPostContainer";
import UserPostContainer from "@components/user/UserPostContainer";
import Block from "@components/block/Block.js";
import BlockTitle from "@components/block/BlockTitle";
import Button from "@components/button/Button";
import Tag from "@components/tag/Tag.js";
import FilterNav from "@components/nav/FilterNav";

import Search from "@icons/ui/search.js";
import Down from "@icons/ui/down.js";

function HeroImg() {
  return <img src="images/mock/hero.jpg" alt="hero image" />;
}

var heroStyle = {};

class Home extends React.Component {
  render() {
    return (
      <BaseLayout>
        <UserHome />
      </BaseLayout>
    );
  }
}
export default Home;

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  render() {
    return (
      <div id="page" className="hero-page">
        {/* ヒーロー */}
        <div id="user-hero" style={heroStyle}>
          <Block>
            <h1 className="user-hero-message">キャンプを、より豊かに</h1>
            <div id="hero-search">
              <input type="search" placeholder="料理、材料、キャンプ道具..." />
                <Search />
                レシピを探す
            </div>
            <div className="user-hero-img">
              <HeroImg />
            </div>
          </Block>
        </div>
        {/* フィルター・タグで絞り込み、都度UI変更*/}
        <FilterNav>
          <div className="dropdown-wrapper filter-ico-wrapper">
            <div className="filter-ico" onClick={this.toggle}>
              <Down />
            </div>
            <div
              className={
                this.state.open
                  ? "dropdown-Block open card"
                  : "dropdown-Block hide card"
              }
            >
              <div className="dropdown-list">
                <a className="dropdown-item">人気順</a>
                <a className="dropdown-item">最新順</a>
              </div>
            </div>
          </div>

          <div className="filter-menu-inner">
            <Tag>じゃがいも</Tag>
            <Tag>豚肉</Tag>
            <Tag>人参</Tag>
            <Tag>セロリ</Tag>
            <Tag>じゃがいも</Tag>
            <Tag>豚肉</Tag>
            <Tag>人参</Tag>
            <Tag>セロリ</Tag>
            <Tag>じゃがいも</Tag>
            <Tag>豚肉</Tag>
            <Tag>人参</Tag>
            <Tag>セロリ</Tag>
            <Tag>じゃがいも</Tag>
            <Tag>豚肉</Tag>
            <Tag>人参</Tag>
            <Tag>セロリ</Tag>
          </div>
        </FilterNav>
        {/* 話題のレシピ・10件表示 */}
        <SliderPostContainer title="話題のレシピ">
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
        </SliderPostContainer>
        <hr />
         {/* 注目のユーザー・10件表示 */}
         <Block>
           <BlockTitle>
             注目のユーザー
            </BlockTitle>
        <SliderPostContainer>
          <SliderPickupUser />
          <SliderPickupUser />
          <SliderPickupUser />
          <SliderPickupUser />
          <SliderPickupUser />
          <SliderPickupUser />
          <SliderPickupUser />
          <SliderPickupUser />
          <SliderPickupUser />
          <SliderPickupUser />
        </SliderPostContainer>
      </Block>
        <hr /> {/* レシピ・12件ずつ表示 */}
        <UserPostContainer title="最近の投稿">
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
        </UserPostContainer>
        <div
          style={{
            margin: "auto",
            textAlign: "center",
          }}
        >
        </div>
      </div>
    );
  }
}
