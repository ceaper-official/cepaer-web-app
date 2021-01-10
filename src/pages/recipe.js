import React from "react";
import Link from "next/link";
import Router from "next/router";

import BaseLayout from "@components/layout/BaseLayout";
import Block from "@components/block/Block";
import BlockTitle from "@components/block/BlockTitle";
import HeroRecipe from "@components/hero/HeroRecipe";
import SliderPost from "@components/user/SliderPost";
import SliderReview from "@components/user/SliderReview";
import SliderPostContainer from "@components/user/SliderPostContainer";
import MakeContainer from "@components/recipe/MakeContainer";
import Make from "@components/recipe/Make";

import StarSolid from "@icons/ui/star-solid.js";
import Like from "@icons/ui/like.js";
import Share from "@icons/ui/share.js";
import Minus from "@icons/ui/minus.js";
import Cross from "@icons/ui/cross.js";
import Add from "@icons/ui/add.js";
import Message from "@icons/ui/message.js";
import Arrow from "@icons/ui/arrow.js";

function UserImg() {
  return <img src="images/default/user.svg" alt="ユーザー　アイコン" />;
}

function FoodImg() {
  return <img src="images/mock/food.svg" alt="レシピ料理" />;
}
function RecipeImg() {
  return <img src="images/mock/food.jpg" alt="recipe image" />;
}

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showPopup: false,
    };
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    return (
      <BaseLayout>
        {/* ヒーロー */}
        <HeroRecipe
          title="ゴルゴンゾーラとトマトのカプレーゼ"
          img={<FoodImg />}
          time="20"
          ingredients="10"
          review="100"
        />

        <div className="contents" id="recipe-hero">
          <div className="section">
            <div className="recipe-wrapper">
              <div className="recipe-inner">
                <div id="recipe-img">
                  <FoodImg />
                  <div className="recipe-actions-wrapper">
                    {/* シェア */}
                    <div className="dropdown-wrapper recipe-action-ico">
                      <button
                        className=""
                        id="recipe-share"
                        onClick={this.toggle}
                      >
                        <Share />
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
                            リンクをコピー
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* コレクション */}
                    <button
                      className="recipe-action-ico "
                      id="recipe-collection"
                      onClick={this.togglePopup.bind(this)}
                    >
                      <Add />
                    </button>
                    {this.state.showPopup ? (
                      <Popup closePopup={this.togglePopup.bind(this)} />
                    ) : null}

                    {/* ライク　アクティブ時 <button>にclass"active"付与 。非アクティブはクラス解除*/}
                    <button className="recipe-action-ico  " id="recipe-like">
                      <Like />
                    </button>
                  </div>
                </div>
              </div>

              <div className="recipe-bio-wrapper">
                <div className="recipe-bio">
                  <h1>ゴルゴンゾーラとトマトのカプレーゼ</h1>
                  <div className="recipe-inner">
                    <a className="user-link">
                      <div className="user-container">
                        <div className="user-avatar user-inner">
                          <UserImg />
                        </div>
                        <div className="user-inner">
                          <p className="user-text name">ケリー小田</p>
                        </div>
                      </div>
                    </a>
                    <span className="margin">・</span>
                    <div className="rating">
                      {/*数値計算*/}
                      <span className="ico">
                        <StarSolid />
                      </span>
                      <h6 id="rating-data">4.3</h6>
                      <h6 id="SliderReviews-data">(100)</h6>
                    </div>
                  </div>

                  <div id="recipe-hero-data">
                    {/*数値計算*/}
                    <div>
                      <h6 id="time-data">20m</h6>
                      <span>調理時間</span>
                    </div>
                    <div>
                      <h6 id="time-data">7</h6>
                      <span>材料数</span>
                    </div>
                    <div>
                      <h6 id="time-data">94</h6>
                      <span>作られた数</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="section">
            <div className="recipe-summary-wrapper">
              <div className="recipe-bio-inner">
                <h6>レシピについて</h6>
                <p>
                  ミニトマト、ゴルゴンゾーラをシンプルに、オリーブオイルと塩で和えました。最後に散らしたバジルが味のアクセントとなっております。見た目もかわいらしく、おもてなし料理としてもぴったりです。冷蔵庫で冷たく冷やしてお召し上がり下さい。
                </p>

                <div className="recipe-bio-inner">
                  <h6>キャンプ道具</h6>
                  <div className="camp-wrapper tag-camp">
                    {/* タグに関連づけたレシピ一覧へリンク */}
                    <Link href="/">
                      <a>BBQグリル</a>
                    </Link>
                    <Link href="/">
                      <a>BBQグリル</a>
                    </Link>
                    <Link href="/">
                      <a>BBQグリル</a>
                    </Link>
                    <Link href="/">
                      <a>BBQグリル</a>
                    </Link>
                    <Link href="/">
                      <a>BBQグリル</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="recipe-bio-inner">
                <div className="flex">
                  <h6>材料</h6>
                  <h4 className="servings ico xs-text w-auto">
                    {/* 人数 */}
                    <span id="servings-data" className="w-auto">
                      2人分
                    </span>
                  </h4>
                </div>
                <div className="ingredients-wrapper xs-text">
                  {/* 入力の際、文字数制限：数量（〜5 */}
                  <span>1個</span>
                  <span className="ingredient">トマト</span>
                  <span>100g</span>
                  <span className="ingredient">ゴルゴンゾーラ</span>
                  <span>6枚</span>
                  <span className="ingredient">バジル</span>
                  <span>大さじ1</span>
                  <span className="ingredient">オリーブオイル</span>
                  <span>少々</span>
                  <span className="ingredient">塩</span>
                  <span>少々</span>
                  <span className="ingredient">黒こしょう</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* 作り方 */}
        <Block>
          <BlockTitle children="作り方" />
          <MakeContainer>
            <Make>
              お皿に1、2、バジルを交互に並べます。オリーブオイルをかけ、塩と黒こしょうをふって完成です。
            </Make>
            <Make>
              お皿に1、2、バジルを交互に並べます。オリーブオイルをかけ、塩と黒こしょうをふって完成です。
            </Make>
            <Make>
              お皿に1、2、バジルを交互に並べます。オリーブオイルをかけ、塩と黒こしょうをふって完成です。
            </Make>
            <Make>
              お皿に1、2、バジルを交互に並べます。オリーブオイルをかけ、塩と黒こしょうをふって完成です。
            </Make>
          </MakeContainer>
        </Block>

        <hr />

        {/* レビュー一覧・10件表示 */}
        <Block>
          <BlockTitle>
            <StarSolid />
            4.3 （100件）
          </BlockTitle>
          <SliderPostContainer>
            <SliderReview />
            <SliderReview />
            <SliderReview />
            <SliderReview />
            <SliderReview />
            <SliderReview />
            <SliderReview />
            <SliderReview />
            <SliderReview />
            <SliderReview />
          </SliderPostContainer>
        </Block>

        <hr />

        {/* 関連するレシピ・10件表示 */}
        <Block>
          <BlockTitle children="関連するレシピ" />
          <SliderPostContainer>
            <SliderPost />
            <SliderPost />
            <SliderPost />
            <SliderPost />
            <SliderPost />
            <SliderPost />
            <SliderPost />
            <SliderPost />
            <SliderPost />
            <SliderPost />
          </SliderPostContainer>
        </Block>

        <style jsx>{`
          #servings-data {
            white-space: nowrap;
          }
        `}</style>
      </BaseLayout>
    );
  }
}

export default Recipe;

class Popup extends React.Component {
  state = { Component: null };
  Create = () => this.setState({ Component: CreateCollection });

  render() {
    const { Component } = this.state;
    if (Component) return <Component />;
    return (
      <div className="popup-row" id="added-collection">
        <div className="popup-row-bg" onClick={this.props.closePopup}></div>
        <div className="popup-wrapper">
          <div className="popup-inner card">
            <button className="popup-row-close" onClick={this.props.closePopup}>
              <Cross />
            </button>
            <h1>コレクションに追加</h1>
            <div className="user-collection-row">
              {/* ユーザーのコレクション全表示 */}
              {/*追加ずみの場合、class"added" 付与。クリックで、コレクション解除+class外れる*/}
              <a className="user-collection card">
                <div className="collection-img">
                  <RecipeImg />
                </div>
                <div className="collection-text">
                  <h6 className="collection-title">
                    ダイエットに効果的な料理100選
                  </h6>
                  <p className="collection-data">
                    <span>30</span>レシピ
                  </p>
                </div>
              </a>
              <a className="user-collection card">
                <div className="collection-img">
                  <RecipeImg />
                </div>
                <div className="collection-text">
                  <h6 className="collection-title">
                    紅葉の秋！ 今食べたい秋の魚レシピまとめ100選 2020スペシャル
                  </h6>
                  <p className="collection-data">
                    <span>30</span>レシピ
                  </p>
                </div>
              </a>
              <a className="user-collection card added">
                <div className="collection-img">
                  <RecipeImg />
                </div>
                <div className="collection-text">
                  <h6 className="collection-title">
                    食欲の秋 秋の味覚を楽しむレシピ特集
                  </h6>
                  <p className="collection-data">
                    <span>30</span>レシピ
                  </p>
                </div>
              </a>
              <a className="user-collection card">
                <div className="collection-img">
                  <RecipeImg />
                </div>
                <div className="collection-text">
                  <h6 className="collection-title">
                    旬を食べ尽くす！ 春に食べたい野菜のレシピまとめ
                  </h6>
                  <p className="collection-data">
                    <span>30</span>レシピ
                  </p>
                </div>
              </a>
            </div>

            <button
              id="create-collection"
              className="button-ol"
              onClick={this.Create}
            >
              新しいコレクションを作成
            </button>
          </div>
        </div>
        <style jsx>{`
          .popup-inner {
            max-width: 500px;
          }
        `}</style>
      </div>
    );
  }
}

class CreateCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      showPopup: false,
    };
  }
  toggle = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <div
        id="create-collection"
        className={this.state.open ? "open popup-row" : "hide popup-row"}
      >
        <div className="popup-row-bg"></div>
        <div className="popup-wrapper">
          <div className="popup-inner card">
            <button className="popup-row-close" onClick={this.toggle}>
              <Cross />
            </button>
            <h1>コレクションを新規作成</h1>
            <input className="input-inner" placeholder="コレクション名" />

            <button className="button-ol create-button" onClick={this.toggle}>
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
