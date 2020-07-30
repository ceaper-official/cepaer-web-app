import Link from "next/link";
import { useRouter } from "next/router";

import { auth, firebase } from "@src/firebase";
import Badge from "../badge/Badge";

import AppLogo from "@icons/app-logo.js";
import Home from "@icons/ui/home.js";
import Like from "@icons/ui/like.js";
import Collection from "@icons/ui/collection.js";
import Cook from "@icons/ui/cook.js";
import Human from "@icons/ui/human.js";
import Search from "@icons/ui/search.js";
import Bell from "@icons/ui/bell.js";

function UserImg() {
  return <img src="images/default/user.svg" alt="user image" />;
}

class MobileNav extends React.Component {
  state = {
    user: null,
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }
  render() {
    return <div>{this.state.user ? <UserNav /> : <GuestNav />}</div>;
  }
}

export default MobileNav;

function GuestNav() {
  return (
    <div id="app-nav">
      <div id="guest-nav">
        <Link href="/">
          <a className="app-nav-inner">
            <span className="app-nav-icon">
              <Home />
            </span>
            <h6>ホーム</h6>
          </a>
        </Link>
        <Link href="/signin">
          <a className="app-nav-inner">
            <span className="app-nav-icon">
              <Human />
            </span>
            <h6>ログイン</h6>
          </a>
        </Link>
        <Link href="/about">
          <a className="app-nav-inner">
            <span className="app-nav-icon">
              <AppLogo />
            </span>
            <h6>Ceaperとは？</h6>
          </a>
        </Link>
      </div>
    </div>
  );
}

function UserNav() {
  const router = useRouter();
  return (
    <div id="app-nav" className={router.pathname == "/recipe" ? "recipe" : ""}>
      <div id="user-nav">
        <Link href="/">
          <a
            className={
              router.pathname == "/" ? "active app-nav-inner" : "app-nav-inner"
            }
          >
            <span className="app-nav-icon">
              <Search />
            </span>
            <h6>探す</h6>
          </a>
        </Link>

        <Link href="/activity">
          <a
            className={
              router.pathname == "/activity"
                ? "active app-nav-inner"
                : "app-nav-inner"
            }
          >
            <span className="app-nav-icon badge-wrapper">
              <Bell />
              {/*数値が1以上の時のみ、バッジ表示*/}
              <Badge />
            </span>
            <h6>通知</h6>
          </a>
        </Link>

        <Link href="/post">
          <a
            className={
              router.pathname == "/post"
                ? "active app-nav-inner"
                : "app-nav-inner"
            }
          >
            <span className="app-nav-icon">
              <Cook />
            </span>
            <h6>投稿</h6>
          </a>
        </Link>

        <Link href="/likes">
          <a
            className={
              router.pathname == "/likes"
                ? "active app-nav-inner"
                : "app-nav-inner"
            }
          >
            <span className="app-nav-icon">
              <Like />
            </span>
            <h6>お気に入り</h6>
          </a>
        </Link>

        <Link href="/collections">
          <a
            className={
              router.pathname == "/collections"
                ? "active app-nav-inner"
                : "app-nav-inner"
            }
          >
            <span className="app-nav-icon">
              <Collection />
            </span>
            <h6>コレクション</h6>
          </a>
        </Link>
      </div>
    </div>
  );
}
