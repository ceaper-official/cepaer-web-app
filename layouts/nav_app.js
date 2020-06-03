import Link from "next/link";
import AppLogo from "../assets/app-logo.js";
import HomeApp from "../assets/icons/ui/home_solid.js";
import HumanApp from "../assets/icons/ui/human_solid.js";
import SearchApp from "../assets/icons/ui/search.js";

const NavApp = () => (
  <div className="app-nav-wrapper">
    <Link href="/">
      <a className="app-nav-inner app-nav-active">
        <span className="app-nav-icon">
          <HomeApp />
        </span>
        <h6>ホーム</h6>
      </a>
    </Link>
    <Link href="/signin">
      <a className="app-nav-inner">
        <span className="app-nav-icon">
          <HumanApp />
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
);

export default NavApp;
