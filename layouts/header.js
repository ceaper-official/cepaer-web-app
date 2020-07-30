import React from "react";
import Logo from "../assets/logo.js";
import Search from "../assets/icons/ui/search.js";
import Share from "../assets/icons/ui/share.js";
import AppLogo from "../assets/app-logo.js";
import Back from "../assets/icons/ui/back.js";
import Pen from "../assets/icons/ui/pen.js";
import Bell from "../assets/icons/ui/bell.js";
import Badge from "../assets/icons/ui/badge.js";
import HumanSolid from "../assets/icons/ui/human-solid.js";
import CollectionSolid from "../assets/icons/ui/collection-solid.js";
import Like from "../assets/icons/ui/like.js";
import LikeSolid from "../assets/icons/ui/like-solid.js";
import { auth, firebase } from "../src/firebase";
import Cross from "../assets/icons/ui/cross.js";
import Add from "../assets/icons/ui/add.js";
import NavApp from "../layouts/nav/nav-app.js";
import ReactStars from "react-rating-stars-component";
import ActivityCollection from "../src/components/activities/activity-collection.js";
import OlButton from "../src/components/1/buttons/button-ol.js";
import ActivityLike from "../src/components/activities/activity-like.js";
import ActivityReview from "../src/components/activities/activity-review.js";
import Link from "next/link";
import Headroom from "react-headroom";
import { useRouter, Router } from "next/router";
import StarSolid from "../assets/icons/ui/star-solid.js";

class UserImg extends React.Component {
  state = {
    user: null,
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }
  render() {
    return (
      <img src={this.state.user && this.state.user.photoURL} alt="user image" />
    );
  }
}

function RecipeImg() {
  return <img src="images/mock/food.jpg" alt="recipe image" />;
}

class Header extends React.Component {
  state = {
    user: null,
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  render() {
    return (
      <div>
        <Headroom id="header" disableInlineStyles>
          <div class="section">
            <div class="nav-container">
              <HeaderLogo />

              {/*ユーザー or ゲスト*/}
              {this.state.user ? (
                <UserHeaderContents />
              ) : (
                <GuestHeaderContents />
              )}
            </div>
          </div>
        </Headroom>
        <NavApp />

        {/*レシピページ*/}
        <Recipe />
      </div>
    );
  }
}
export default Header;

function HeaderLogo() {
  const router = useRouter();
  return (
    <>
      <Link href="/">
        <a className={router.pathname == "/" ? "logo-link home" : "logo-link"}>
          <Logo />
        </a>
      </Link>

      <a
        onClick={() => Router.back()}
        className={
          router.pathname == "/"
            ? "header-back-ico ico-button-plane home"
            : "ico-button-plane header-back-ico"
        }
      >
        <Back />
      </a>
    </>
  );
}

class UserHeaderContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open1: false,
      open: false,
    };
  }
  toggle1 = () => {
    this.setState({
      open1: !this.state.open1,
    });
  };
  toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  handleLogout = () => {
    firebase.auth().signOut();
  };
  state = {
    user: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }
  render() {
    return (
      <div class="nav-inner nav-inner-desktop">
        <div class="nav-controls"></div>
        <div class="nav-controls">
          <div className="header-contents desktop-content">
            <div className="header-icon  badge-wrapper">
              <Search />
            </div>
          </div>

          <div className="dropdown-wrapper header-contents activity-wrapper  desktop-content">
            <div className="header-icon  badge-wrapper" onClick={this.toggle1}>
              <Bell /> {/* 数値が1以上の時のみ、表示 */}
              <Badge />
            </div>

            <div
              className={
                this.state.open1
                  ? "dropdown-contents open card"
                  : "dropdown-contents hide card"
              }
            >
              <div className="dropdown-nav">
                <a class="dropdown-item accent" href="/activity">
                  全ての通知を見る
                </a>
              </div>
              <div className="dropdown-list">
                {/* 5件表示 */}
                <ActivityLike
                  user="ケリー小田"
                  recipe="ゴルゴンゾーラとトマトのカプレーゼ"
                  date="14m"
                />
                <ActivityCollection
                  user="ミッシェル"
                  recipe="豚の角煮"
                  date="20h"
                />
                <ActivityReview
                  user="坂東英二"
                  recipe="絶品！ゆで卵"
                  date="5d"
                  img="images/mock/food.jpg"
                >
                  美味しいです。ご飯にも合う味でした！もう一品欲しいときに便利！
                </ActivityReview>
                <ActivityLike
                  user="ケリー小田"
                  recipe="ゴルゴンゾーラとトマトのカプレーゼ"
                  date="6d"
                />
                <ActivityCollection
                  user="ミッシェル"
                  recipe="豚の角煮"
                  date="1w"
                />
              </div>
            </div>
          </div>

          {/*ユーザー*/}
          <div className="dropdown-wrapper header-contents">
            <div className="user-container" onClick={this.toggle}>
              <div
                className="user-avatar"
                style={{
                  margin: 0,
                }}
              >
                <UserImg />
              </div>
            </div>
            <div
              className={
                this.state.open
                  ? "dropdown-contents open card"
                  : "dropdown-contents hide card"
              }
            >
              <div className="dropdown-list">
                <Link href="/user">
                  <a className="dropdown-item">プロフィール </a>
                </Link>

                <Link href="/collections">
                  <a className="dropdown-item"> コレクション</a>
                </Link>

                <Link href="/likes">
                  <a className="dropdown-item">お気に入り</a>
                </Link>

                <hr />

                <Link href="/edit">
                  <a className="dropdown-item dropdown-item-negative">
                    アカウントの設定
                  </a>
                </Link>
                <a
                  className="dropdown-item dropdown-item-negative"
                  onClick={this.handleLogout}
                >
                  ログアウト
                </a>
              </div>
            </div>
          </div>

          <div className="header-contents desktop-content">
            <Link href="/post">
              <OlButton>レシピを投稿</OlButton>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function GuestHeaderContents() {
  return (
    <div class="nav-inner nav-inner-desktop">
      <div class="nav-controls">
        <div class="search-wrapper">
          <span class="search-icon">
            <span class="search-icon-inner">
              <Search />
            </span>
          </span>
          <input
            class="search"
            type="search"
            name="q"
            placeholder="料理、材料、キャンプ道具..."
          />
        </div>
      </div>
      <div class="nav-controls">
        <Link href="/signin">
          <a className="button-text">ログイン</a>
        </Link>

        <Link href="/signup">
          <a
            className="button icon-button nav-account-button ico"
            style={{
              margin: 0,
            }}
          >
            <HumanSolid />
            アカウントを作成
          </a>
        </Link>
      </div>
    </div>
  );
}

//レシピ

function Recipe() {
  const router = useRouter();
  return (
    <div
      className={
        router.pathname == "/recipe" ? "recipe-nav recipe" : "recipe-nav"
      }
    >
      <div className="section">
        <div className="nav-container">
          <RecipeContents />
        </div>
      </div>
    </div>
  );
}

class RecipeContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  togglePopupReview() {
    this.setState({
      showPopupReview: !this.state.showPopupReview,
    });
  }
  toggle = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <>
        <div className="nav-controls">
          <a className="user-link">
            <div className="user-container">
              <div className="user-avatar user-inner">
                <UserImg />
              </div>
              <div className="user-inner">
                <p className="user-text name">マイケル</p>
                <div className="rating user-text">
                  {/*数値計算*/}
                  <span className="ico">
                    <StarSolid />
                  </span>
                  <h6 id="rating-data">4.3</h6>
                  <h6 id="reviews-data">(100)</h6>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* レビュー　アクティブ時 <button>にclass"active"付与 。非アクティブはクラス解除*/}
        <button className="button" onClick={this.togglePopupReview.bind(this)}>
          <Pen />
          レビューを書く
        </button>
        {this.state.showPopupReview ? (
          <PopupReview closePopup={this.togglePopupReview.bind(this)} />
        ) : null}
      </>
    );
  }
}

//レビュー
class PopupReview extends React.Component {
  render() {
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    return (
      <div className="popup-row" id="added-collection">
        <div className="popup-row-bg" onClick={this.props.closePopup}></div>
        <div className="popup-wrapper">
          <div className="popup-inner card">
            <button className="popup-row-close" onClick={this.props.closePopup}>
              <Cross />
            </button>
            <h1>レビューを書く</h1>
            <div className="rating">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={20}
                color2={"#ff5445"}
              />
            </div>
            <textarea placeholder="作ってみた感想を、お書きください。"></textarea>

            <button
              id="create-collection"
              className="button-ol"
              onClick={this.props.closePopup}
            >
              レビューを投稿{" "}
            </button>
          </div>
        </div>
        <style jsx>{`
          textarea {
            max-width: 500px;
            margin: 2rem 0;
          }
        `}</style>
      </div>
    );
  }
}
