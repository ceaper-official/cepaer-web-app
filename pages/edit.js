import BaseLayout from '../layouts/base.js'
import Link from 'next/link';
import Add from "../assets/icons/ui/add.js";
import  SettingSolid from "../assets/icons/ui/setting_solid.js";
import Upload from "../assets/icons/ui/upload.js";
import Cross from "../assets/icons/ui/cross.js";
import Instagram from "../assets/icons/social/instagram.js";
import Twitter from "../assets/icons/social/twitter.js";
import Google from "../assets/icons/social/google.js";
import Facebook from "../assets/icons/social/facebook.js";
import UserShot from "../layouts/shot_user.js";
import  NavEdit from "../layouts/nav-edit.js";
import  NavEditMobile from "../layouts/nav-edit-mobile.js";

function User() {
  return <img src="images/default/user.jpg" alt="user image" />
}

/*入力された文・値は保存*/
export default () => (
  <BaseLayout>
  <div id="page"class="side-nav-page">
  <div class="user-row edit-row">
  <div class='contents'>
  <div class='section edit-wrapper center-section'>

    <NavEdit/>
      <NavEditMobile/>

<div class="edit-inner">

  {/*項目・プロフィール*/}
  <div class="edit-section" id="profile">
  <div class="user-container">
    <h3 class="edit-section-title section-title edit-item">プロフィール</h3>
    <div class = "edit-item edit-user-icon-wrapper">
    <div class="edit-user-icon">
    <User />
    </div>
    <div class="edit-user-button-wrapper">
      <button  class="button button-black ico" ><Upload/>アイコンをアップロード</button>
        <button  class="button button-grey ico" >削除</button>
        </div>
                    </div>

          <div class = "edit-item">
      <label class="edit-title s-text edit-required">ユーザー名</label>
<input class="input-inner edit-input-inner" autocomplete="username" type="text" value="ケリー小田"  required/>
 </div>

        <div class = "edit-item">
<label class="edit-title s-text">自己紹介</label>
          <textarea class="edit-area">私は、料理が大好きな生粋のキャンパーです。週7で、キャンプに行っています！よく出没する場所は高尾山です。</textarea>
           </div>
  </div>
</div>

  {/*項目・アカウント設定*/}
  <div class="edit-section" id="settings">
    <h3 class="edit-section-title section-title edit-item">アカウント設定</h3>
          <div class = "edit-item">
      <label class="edit-title s-text">Eメール</label>
<input class="input-inner edit-input-inner" autocorrect="off" autocapitalize="off" autocomplete="useremail" type="text" value="user@gmail.com"/>
 </div>
 <div class = "edit-item">
<label class="edit-title s-text">新しいEメール</label>
<input class="input-inner edit-input-inner" autocorrect="off" autocapitalize="off" autocomplete="useremail" type="text" />
</div>
</div>

  {/*項目・パスワード*/}
  <div class="edit-section" id="password">
    <h3 class="edit-section-title section-title edit-item">パスワード</h3>
          <div class = "edit-item">
      <label class="edit-title s-text">現在のパスワード</label>
<input class="input-inner edit-input-inner" autocomplete="userpassword" type="password" value="user@gmail.com"/>
 </div>
 <div class = "edit-item">
<label class="edit-title s-text">新しいパスワード</label>
<input class="input-inner edit-input-inner"type="password" value=""/>
</div>
</div>


  {/*項目・ソーシャルメディア*/}
  <div class="edit-section" id="social-settings">
    <h3 class="edit-section-title section-title edit-item">ソーシャルメディア</h3>
          <div class = "edit-item">
            <label class="edit-title s-text">Instagram</label>
            <div class="action-button-wrapper input-wrapper">
            <span class="input-prefix">
            <Instagram />
            </span>
            <input class="input-inner w100" placeholder="ユーザーネームを入力してください"></input>
            </div>
 </div>
     <div class = "edit-item">
       <label class="edit-title s-text">Facebook</label>
       <div class="action-button-wrapper input-wrapper">
       <span class="input-prefix">
       <Facebook />
       </span>
       <input class="input-inner w100" placeholder="ユーザーIDを入力してください"></input>
       </div>
</div>
    <div class = "edit-item">
      <label class="edit-title s-text">Twitter</label>
      <div class="action-button-wrapper input-wrapper">
      <span class="input-prefix">
      <Twitter />
      </span>
      <input class="input-inner w100" placeholder="ユーザーIDを入力してください"></input>
      </div>
</div>
</div>

  {/*項目・外部サービスの連携*/}
  <div class="edit-section" id="connections">
    <h3 class="edit-section-title section-title edit-item">外部サービスのログイン連携</h3>
          <div class = "edit-item edit-connections">
        <div class="ico"><Google/>Google</div>
          <a class="button
             edit-connected-button">連携済み</a>
 </div>
 <div class = "edit-item edit-connections">
<div class="ico"><Facebook/>Facebook</div>
 <a class="button button-black">連携する</a>
</div>
</div>

  {/*項目・お知らせ*/}
  <div class="edit-section" id="notifications">
    <h3 class="edit-section-title section-title edit-item">お知らせ</h3>
      <label class="edit-title s-text edit-item">アクティビティの通知</label>
        <div class="hr edit-hr"></div>
   <div class = "edit-item edit-toggle-wrapper">
      <div  class="edit-toggle">
    <input id="toggle" class="toggle-input" type='checkbox' />
    <label for="toggle" class="toggle-label"/>
  </div>
  <label class=" edit-title s-text s-text edit-toggle-text">新しいフォロワー</label>
  </div>
   <div class = "edit-item edit-toggle-wrapper">
      <div  class="edit-toggle">
    <input id="toggle" class="toggle-input" type='checkbox' />
    <label for="toggle" class="toggle-label"/>
  </div>
  <label class=" edit-title s-text s-text edit-toggle-text">投稿したレシピへのレビュー</label>
  </div>
  <div class = "edit-item edit-toggle-wrapper">
     <div  class="edit-toggle">
   <input id="toggle" class="toggle-input" type='checkbox' />
   <label for="toggle" class="toggle-label"/>
 </div>
 <label class=" edit-title s-text s-text edit-toggle-text">フォローしているユーザーの投稿</label>
 </div>

 <label class="edit-title s-text edit-item">Ceaperの通知</label>
      <div class="hr edit-hr"></div>
 <div class = "edit-item edit-toggle-wrapper">
    <div  class="edit-toggle">
  <input id="toggle" class="toggle-input" type='checkbox' />
  <label for="toggle" class="toggle-label"/>
</div>
<label class=" edit-title s-text s-text edit-toggle-text">トレンドニュース（隔週）</label>
</div>

 <div class = "edit-item edit-toggle-wrapper">
    <div  class="edit-toggle">
  <input id="toggle" class="toggle-input" type='checkbox' />
  <label for="toggle" class="toggle-label"/>
</div>
<label class=" edit-title s-text s-text edit-toggle-text">重要なお知らせ（アップデート等）</label>
</div>


</div>

  {/*項目・保存する*/}
  <div class="edit-section edit-item edit-save-button" id="save">
          <div>
            <a class="button button-accent">保存する</a>
 </div>
</div>

  </div>

  </div>
</div>
</div>
</div>
</BaseLayout>
)
