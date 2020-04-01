import Link from 'next/link';
import Logo from "../assets/logo.js";
import Search from "../assets/icons/ui/search.js";
import HumanSolid from "../assets/icons/ui/human_solid.js";

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
  <Link  href="/signup">
  <a  class="button icon-button button-black nav-account-button ico"  style={{ margin: 0 }}>
<HumanSolid />アカウントを作成
</a>
      </Link>
  </div>
  </div>
  </div>
)

export default HeaderMobile
