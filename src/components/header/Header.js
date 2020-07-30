import React from "react";
import { useRouter, Router } from "next/router";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";

import { auth, firebase } from "@src/firebase";
import Button from "@components/button/Button";
import ActivityCollection from "@components/activity/ActivityCollection";
import ActivityLike from "@components/activity/ActivityLike";
import ActivityReview from "@components/activity/ActivityReview";
import Badge from "@components/badge/Badge";
import MobileNav from "@components/nav/MobileNav";
import Dropdown from "@components/dropdown/Dropdown";
import DropdownItem from "@components/dropdown/DropdownItem";
import UserIcon  from "@components/user/UserIcon";
import UserRating from "@components/user/UserRating";
import UserContainer from "@components/user/UserContainer";

import Logo from "@icons/logo.js";
import AppLogo from "@icons/app-logo.js";
import Search from "@icons/ui/search.js";
import Share from "@icons/ui/share.js";
import Back from "@icons/ui/back.js";
import Pen from "@icons/ui/pen.js";
import Bell from "@icons/ui/bell.js";
import HumanSolid from "@icons/ui/human-solid.js";
import CollectionSolid from "@icons/ui/collection-solid.js";
import Like from "@icons/ui/like.js";
import LikeSolid from "@icons/ui/like-solid.js";
import Cross from "@icons/ui/cross.js";
import Add from "@icons/ui/add.js";
import StarSolid from "@icons/ui/star-solid.js";

import s from "./Header.module.scss";

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
        <header className={s.header} disableInlineStyles>
          <div className={s.header__container}>
            <HeaderLogo />
              {this.state.user ? (
                <UserHeaderContents />
              ) : (
                <GuestHeaderContents />
              )}
            </div>
        </header>
        <MobileNav />
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
      <span className={`${s.header__logo} ${s.header__desktop__item}`}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </span>

      <a onClick={() => Router.back()}
         className={`${s.header__icon} ${s.header__mobile__item} ${router.pathname == "/" ? 'home' : ''}`}>
        <Back />
      </a>
    </>
  );
}

class UserHeaderContents extends React.Component {

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
      <div className="nav-inner nav-inner-desktop">
        <div className="nav-controls"></div>
        <div className="nav-controls">
          <div className={`${s.header__item} ${s.header__desktop__item}`}>
          <Dropdown button={<span className={s.header__icon}><Bell/></span>}>
            <DropdownItem fix  name="全ての通知を見る" href="/activity"/>
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
          </Dropdown>
        </div>

          <div className={s.header__item}>
          <Dropdown
            button={<UserIcon icon={this.state.user && this.state.user.photoURL}/>}>
            <DropdownItem name="プロフィール" href="/user"/>
            <DropdownItem name="コレクション"  href="/collections"/>
            <DropdownItem name="お気に入り"  href="/likes"/>
            <hr/>
            <DropdownItem sub name="アカウントの設定"  href="/edit"/>
            <DropdownItem sub name="ログアウト" onClick={this.handleLogout}/>
          </Dropdown>
        </div>

        <div className={`${s.header__item} ${s.header__desktop__item}`}>
            <Button outline  href="/post">レシピを投稿</Button>
          </div>
        </div>
      </div>
    );
  }
}

function GuestHeaderContents() {
  return (
    <div className="nav-inner nav-inner-desktop">
      <div className="nav-controls">
        <div className={`${s.header__item} ${s.header__desktop__item}`}>
          <Button href="/signin" outline>
            ログイン
          </Button>
        </div>
        <div className={`${s.header__item} ${s.header__desktop__item}`}>
          <Button href="/signin">
              <HumanSolid />
            アカウントを作成
          </Button>
        </div>
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
        <Link href="/user">
        <a>
          <UserContainer title="マイケル">
            <UserRating rate="4.3" all="100"/>
          </UserContainer>
        </a>
        </Link>
        </div>

        {/* レビュー　アクティブ時 <button>にclass"active"付与 。非アクティブはクラス解除*/}
        <button  onClick={this.togglePopupReview.bind(this)}>
          <Button >レビューを書く</Button>
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
