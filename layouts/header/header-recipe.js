import React from "react";
import Link from "next/link";
import Logo from "../../assets/logo.js";
import Search from "../../assets/icons/ui/search.js";
import Share from "../../assets/icons/ui/share.js";
import Like from "../../assets/icons/ui/like.js";
import HumanSolid from "../../assets/icons/ui/human_solid.js";
import NavApp from "../../layouts/nav_app.js";
import Router from "next/router";
import Back from "../../assets/icons/ui/back.js";

function User() {
  return <img src="images/default/user.svg" alt="user image" />;
}

const RecipeHeader = () => (
  <div>
    <div id="header">
      <div id="desktop-nav">
        <div class="nav-container">
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

export default RecipeHeader;

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
          {/*アイコンは、アクティブ時 class付与（色変更）*/}
          <div className="app-header-inner">
            {/* シェア*/}
            <span className="share app-header-icon">
              <Share />
            </span>
            {/*ライク*/}
            <span className="like app-header-icon">
              <Like />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
