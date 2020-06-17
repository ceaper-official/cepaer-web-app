import React from "react";
import Link from "next/link";
import Logo from "../assets/logo.js";
import Search from "../assets/icons/ui/search.js";
import HumanSolid from "../assets/icons/ui/human_solid.js";
import HomeApp from "../assets/icons/ui/home_solid.js";
import HumanApp from "../assets/icons/ui/human_solid.js";
import AppLogo from "../assets/app-logo.js";
import Back from "../assets/icons/ui/back.js";

function User() {
  return <img src="images/default/user.svg" alt="user image" />;
}

const Header = () => (
  <div>
    <div id="header">
      <div id="desktop-nav">
        <div class="nav-container">
          <Link href="/">
            <a class="logo-link">
              <Logo />
            </a>
          </Link>
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
                <a class="button-text">ログイン</a>
              </Link>
              <Link href="/signup">
                <a
                  class="button icon-button nav-account-button ico"
                  style={{ margin: 0 }}
                >
                  <HumanSolid />
                  アカウントを作成
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="app-header" class="bg-white">
      <HeaderApp />
    </div>
    <div id="app-nav">
      <NavApp />
    </div>
  </div>
);

export default Header;

function HeaderApp() {
  return (
    <div>
      {" "}
      <div className="section">
        <div className="app-header-wrapper">
          <div className="app-header-inner" onClick={() => Router.back()}>
            {/* ホームページ時は、visibility:hidden */}
            <Back />
          </div>

          <div className="app-header-inner">
            <span className="search-icon">
              <span className="search-icon-inner">
                <Search />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavApp() {
  return (
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
}
