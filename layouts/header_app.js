import Link from 'next/link';
import LogoDark from "../assets/logo-dark.js";
import HomeApp from "../assets/icons/ui/home_solid.js";
import HumanApp from "../assets/icons/ui/human_solid.js";
import Back from "../assets/icons/ui/back.js";
import Search from "../assets/icons/ui/search.js";
import Router from 'next/router'

function User() {
  return <img src="images/default/user.jpg" alt="user image" />
}

const HeaderApp = () => (
<div > <div class="section">
  <div class="app-header-wrapper">

    <div class="app-header-inner app-header-inner1" onClick={() => Router.back()}>
      {/* ホームページ時は、visibility:hidden */}<Back/></div>

    <div class="app-header-inner app-header-inner2">
      <div class="search-wrapper">
        <span class="search-icon"><span class="search-icon-inner"><Search /></span></span>
    <input class="search xs-text" type="search" name="q" placeholder="料理、材料、キャンプ道具..."/>
  </div>
    </div>

  </div>
</div>
</div>
)

export default HeaderApp
