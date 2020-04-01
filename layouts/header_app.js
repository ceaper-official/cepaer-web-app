import Link from 'next/link';
import Logo from "../assets/logo.js";
import HomeApp from "../assets/icons/ui/home_solid.js";
import HumanApp from "../assets/icons/ui/human_solid.js";
import Back from "../assets/icons/ui/back.js";

function User() {
  return <img src="images/default/user.jpg" alt="user image" />
}

const HeaderApp = () => (
  <div>
  <div class="section">
  <div class="app-header-wrapper">

      <div class="app-header-inner app-header-inner1">
      {/*直前にいたページへリンク。ホームページ時は、visibility:hidden*/}
      <Link href="/">
      <a>
      <Back/>
</a>
</Link>
</div>

<div class="app-header-inner app-header-inner2">
<Link href="/">
<a class="logo-link">
<Logo/>
</a>
    </Link>
    </div>

<div class="app-header-inner app-header-inner3">
{/*ユーザーページへリンク。ログアウト時は、visibility:hidden*/}
<Link href="/user">
<a>
<div class="user-container">
<div class="user-avatar"style={{ margin: 0 }}>
<User />
</div>
</div>
</a>
</Link>
</div>


</div>
      </div>
      </div>

)

export default HeaderApp
