import Link from "next/link";
import Logo from "../assets/logo.js";
import Search from "../assets/icons/ui/search.js";
import HumanSolid from "../assets/icons/ui/human_solid.js";

const HeaderMobile = () => (
  <div className="nav-container">
    <Link href="/">
      <a className="logo-link">
        <Logo />
      </a>
    </Link>
    <div className="nav-inner">
      {/*ログイン後、下部にスティッキーで、「検索」「マイページ」「お気に入り」のコンテンツ表示*/}
      <a className="search-wrapper hover-accent">
        {/*クリックで、上部に検索ボタン表示*/}
        <span className="search-icon">
          <Search />
        </span>
      </a>
      <div className="nav-controls">
        <Link href="/signup">
          <a
            className="button icon-button button-black nav-account-button ico"
            style={{ margin: 0 }}
          >
            <HumanSolid />
            アカウントを作成
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default HeaderMobile;
