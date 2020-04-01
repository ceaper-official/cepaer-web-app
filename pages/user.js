import BaseLayout from '../layouts/base.js'
import Link from 'next/link';
import Add from "../assets/icons/ui/add.js";
import  Setting from "../assets/icons/ui/setting.js";
import Instagram from "../assets/icons/social/instagram.js";
import Facebook from "../assets/icons/social/facebook.js";
import Twitter from "../assets/icons/social/twitter.js";
import UserShot from "../layouts/shot_user.js";
import  PenSolid from "../assets/icons/ui/pen_solid.js";
import  CookSolid from "../assets/icons/ui/cook_solid.js";
import  StarSolid from "../assets/icons/ui/star_solid.js";



function User() {
  return <img src="images/default/user.jpg" alt="user image" />
}

export default () => (
  <BaseLayout>
  <div id="page">
  <div class="user-row">
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
        <a class="user-data-inner xs-text user-data-inner-start"style={{ paddingLeft: 0 }}>
        <h6>3</h6>
      <span>レシピ</span>
        </a>
        <a class="user-data-inner xs-text">
        <h6>134</h6>
      <span>作ったレシピ</span>
        </a>
        <a class="user-data-inner xs-text">
        <h6>204</h6>
      <span>フォロワー</span>
        </a>
        <a class="user-data-inner xs-text user-data-inner-last"style={{ paddingRight: 0 }}>
        <h6>13</h6>
      <span>フォロー</span>
        </a>
</div>
        <a class="button add-button button-accent ico"><Add />フォロー</a>
        <a class="button setting-button button-black ico"><Setting />プロフィールを編集</a>
    </div>
  </div>
  </div>
</div>
</div>
  <div class='contents'>
  <div class='section'>
 <div class="tab-wrapper">
    <input id="tab01" type="radio" name="tab" class="tab-switch" checked="checked"/><label class="tab-label s-text ico" for="tab01"><PenSolid/>投稿したレシピ<span class="tab-label-data">{/*数値取得*/}30</span></label>
    <div class="tab-content">
    <UserShot />
    </div>
    <input id="tab02" type="radio" name="tab" class="tab-switch"/><label class="tab-label s-text ico" for="tab02"><CookSolid/>作ったレシピ<span class="tab-label-data">{/*数値取得*/}6</span></label>
    <div class="tab-content">
    <UserShot />
    </div>
    <input id="tab03" type="radio" name="tab" class="tab-switch"/><label class="tab-label s-text ico" for="tab03"><StarSolid/>お気に入り<span class="tab-label-data">{/*数値取得*/}102</span></label>
    <div class="tab-content">
    <UserShot />
    </div>
</div>
 </div>
 </div>
</div>
</BaseLayout>
)
