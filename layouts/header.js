import Link from 'next/link';
import Logo from "../assets/logo.js";
import Search from "../assets/icons/ui/search.js";
import HumanSolid from "../assets/icons/ui/human_solid.js";
import HeaderMobile from '../layouts/header_mobile.js';
import HeaderApp from '../layouts/header_app.js';
import NavApp from '../layouts/nav_app.js';

const Header = () => (
  <div>
  <div id="header">
    <div id="desktop-nav">
                <div class="nav-container">
                <Link href="/">
                <a class="logo-link">
          <Logo/>
          </a>
                    </Link>
    <div class="nav-inner nav-inner-desktop">
            <div class="nav-controls">
        <div class="search-wrapper">
          <span class="search-icon"><span class="search-icon-inner"><Search /></span></span>
      <input class="search" type="search" name="q" placeholder="料理、材料、キャンプ道具..."/>
    </div>
      <a href="/blog" class="hover-accent articles">記事一覧</a>
    </div>
    <div class="nav-controls">
    <Link  href="/signin">
    <a class="hover-accent">
ログイン
</a>
        </Link>
        <Link  href="/signup">
        <a  class="button icon-button button-black nav-account-button ico"  style={{ margin: 0 }}>
<HumanSolid />アカウントを作成
    </a>
            </Link>
    </div>
  </div>
  </div>
</div>
<div id="mobile-nav">
<HeaderMobile />
</div>
</div>
<div id="app-header" class="bg-white">
<HeaderApp />
</div>
<div id="app-nav">
<NavApp />
</div>
</div>
)

export default Header
