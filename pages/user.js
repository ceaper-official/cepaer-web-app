import Link from 'next/link';
import Add from "../assets/icons/ui/add.js";
import Instagram from "../assets/icons/social/instagram.js";
import Facebook from "../assets/icons/social/facebook.js";
import Twitter from "../assets/icons/social/twitter.js";


function User() {
  return <img src="images/default/user.jpg" alt="user image" />
}

export default () => (
  <div id="user-page" class="page">


  <div class='contents'>
  <div class='section'>
  <div class="user-container">
    <div class="user-avatar">
    <User />
    </div>
<div class="user-inner">
        <p class="user-text name">ケリー小田</p>
        <p class="user-bio">私は、料理が大好きな生粋のキャンパーです。週7で、キャンプに行っています！よく出没する場所は高尾山です。</p>
        <div class="user-social">
        {/*ユーザーのSNSリンク*/}
        <a class="user-social-link">
        <Instagram />
        </a>
        <a class="user-social-link">
        <Facebook />
        </a>
        <a class="user-social-link">
        <Twitter />
        </a>
</div>
        <div class="user-data">
        <a class="user-data-inner xs-text user-data-inner-start">
        <h6>134</h6>
      <span>作った料理</span>
        </a>
        <a class="user-data-inner xs-text">
        <h6>13</h6>
      <span>レシピ</span>
        </a>
        <a class="user-data-inner xs-text">
        <h6>204</h6>
      <span>フォロワー</span>
        </a>
        <a class="user-data-inner xs-text user-data-inner-last">
        <h6>13</h6>
      <span>フォロー</span>
        </a>
</div>
        <a class="button add-button"><Add />フォロー</a>
    </div>
  </div>
  </div>
</div>

  {/*アクティブページの色変更*/}
  <div class='contents'>
  <div class='section'>
  <div class="user-nav">
  <a class="user-nav-inner xs-text">投稿したレシピ</a>
    <a class="user-nav-inner xs-text">お気に入り</a>
    <a class="user-nav-inner xs-text">作ったレシピ</a>
 </div>
 </div>
 </div>



</div>
)
