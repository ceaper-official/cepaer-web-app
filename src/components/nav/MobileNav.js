import Link from "next/link";
import { useRouter } from "next/router";

import { auth, firebase } from "@src/firebase";
import Badge from "../badge/Badge";

import MobileNavItem from "@components/nav/MobileNavItem"
import Home from "@icons/ui/home.js";
import Like from "@icons/ui/like.js";
import Collection from "@icons/ui/collection.js";
import Pen from "@icons/ui/pen";
import HumanAdd from "@icons/ui/human-add.js";
import Search from "@icons/ui/search.js";
import Bell from "@icons/ui/bell.js";

import s from "./MobileNav.module.scss";

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
    return <>{this.state.user ? <UserNav /> : <GuestNav />}</>;
  }
}

export default MobileNav;

function GuestNav() {
  return (
    <nav className={s.mobile__nav}>
      <div className={s.guest}>
        <MobileNavItem
          icon={<Home/>}
          href="/"
          title="ホーム"
        />
        <MobileNavItem
          icon={<HumanAdd/>}
          href="/signup"
          title="アカウントを作成"
        />
      </div>
    </nav>
  );
}

function UserNav() {
  const router = useRouter();
  return (
    <nav className={s.mobile__nav}>
      <div className={s.user}>
        <MobileNavItem
          icon={<Search/>}
          href="/"
          title="検索"
        />
        <MobileNavItem
          icon={<Bell/>}
          href="/activity"
          title="通知"
        />
      <MobileNavItem
        icon={<Pen/>}
        href="/post"
        title="投稿"
      />
      <MobileNavItem
        icon={<Like/>}
        href="/likes"
        title="お気に入り"
      />
      <MobileNavItem
        icon={<Collection/>}
        href="/collections"
        title="コレクション"
      />
    </div>
  </nav>
  );
}
