import Link from 'next/link';
import Logo from "../assets/logo.js";
import Search from "../assets/icons/ui/search.js";
import HumanSolid from "../assets/icons/ui/human_solid.js";
import HeaderMobile from '../layouts/header_mobile.js';
import HomeHeaderApp from '../layouts/header-home-app.js';
import NavApp from '../layouts/nav_app.js';

const HomeHeader = () => (
  <div>
  <div id="header">
    <div id="desktop-nav">
                <div className="nav-container">
                <Link href="/">
                <a className="logo-link">
          <Logo/>
          </a>
                    </Link>
    <div className="nav-inner nav-inner-desktop">
            <div className="nav-controls">
        <div className="search-wrapper">
          <span className="search-icon"><span className="search-icon-inner"><Search /></span></span>
      <input className="search" type="search" name="q" placeholder="料理、材料、キャンプ道具..."/>
    </div>
      <a href="/blog" className="hover-accent articles">記事一覧</a>
    </div>
    <div className="nav-controls">
    <Link  href="/signin">
    <a className="hover-accent">
ログイン
</a>
        </Link>
        <Link  href="/signup">
        <a  className="button icon-button button-black nav-account-button ico"  style={{ margin: 0 }}>
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
<div id="app-header" className="bg-white">
<HomeHeaderApp />
</div>
<div id="app-nav">
<NavApp />
</div>
</div>
)

export default HomeHeader
