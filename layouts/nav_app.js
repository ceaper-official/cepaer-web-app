import Link from 'next/link';
import Logo from "../assets/logo.js";
import HomeApp from "../assets/icons/ui/home_app.js";
import HumanApp from "../assets/icons/ui/human_app.js";
import SearchApp from "../assets/icons/ui/search_app.js";

const NavApp = () => (
<div class="app-nav-wrapper">

<Link  href="/">
<a class="app-nav-inner app-nav-active">
<span class="app-nav-icon"><HomeApp /></span>
<h6>ホーム</h6>
</a>
    </Link>
    <Link  href="/signin">
    <a class="app-nav-inner">
    <span class="app-nav-icon"><HumanApp /></span>
    <h6>ログイン</h6>
</a>
        </Link>
  <a class="app-nav-inner">
{/*クリックで、上部に検索ボタン表示*/}
    <span class="app-nav-icon"><SearchApp /></span>
    <h6>調べる</h6>
  </a>
</div>
)

export default NavApp
