import Link from 'next/link';
import Logo from "../assets/logo.js";
import Search from "../assets/icons/ui/search.js";

const HeaderMobile = () => (
  <div class="nav-container">
  <Link href="/">
  <a class="logo-link">
<Logo/>
</a>
      </Link>
  <div class="nav-inner">
  {/*ログイン後、下部にスティッキーで、「検索」「マイページ」「お気に入り」のコンテンツ表示*/}
    <div class="search-wrapper">
    {/*クリックで、上部に検索ボタン表示*/}
      <span class="search-icon"><Search /></span>
    </div>
  <div class="nav-controls">
  <a class="button button-black-ol header-start-button" href="/signup"style={{ margin: 0 }}>はじめる</a>
  </div>
  </div>
  </div>
)

export default HeaderMobile
