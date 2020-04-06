import BaseLayout from '../layouts/base.js'
import Link from 'next/link';
import  Message from "../assets/icons/ui/message.js";
import  Bug from "../assets/icons/ui/bug.js";
import  Notice from "../assets/icons/ui/notice.js";
import  Trouble from "../assets/icons/ui/trouble.js";
import  Other from "../assets/icons/ui/other.js";
import  Discontent from "../assets/icons/ui/discontent.js";
export default () => (
  <BaseLayout>
  <div id="page">
  <div class='contents bg-red'>
  <div class='section center-section'>
<h1 class='title white'>アカウントの無効化</h1>
<p class="white"  style={{ marginBottom: 0 }}>下記の手順に沿って、アカウントの無効化の手続きを進めてください。なお、アカウントを無効化する場合、これまでに投稿したレシピなどのアクティビティが全て削除されます。再度アカウントを作成する場合、以前無効にしたアカウントを使用・復旧する事は一切できません。また、その間に他のユーザーの方が、無効化したユーザー名を使用できる為、以前使用していたユーザー名が使えない場合がございます。予めご了承ください。</p>
</div>
 </div>
 <div class='contents'>
 <div class='section center-section'>

 {/*アクションを起こすと、次の項目が表示*/}
  <div class="feedback-wrapper">
  <h5 class="hr-section-title">無効化する理由を選んでください</h5>
  <div class = "form-select">
  <a  class="icon-button ico select-button select-button-bottom"><Discontent/>サービスの不満
</a>
<a  class="icon-button ico select-button select-button-bottom"><Trouble/>トラブルの発生
</a>
<a  class="icon-button ico select-button">  <Other/>その他
</a>
   </div>
   </div>

     <div class="feedback-wrapper">
     <h5 class="hr-section-title">内容を詳しくお話しください（任意）</h5>
     <div class = "form-select">
     <textarea class="feedback-area" placeholder="無効化する理由や、サービスに不満などございましたら、詳しくお話しください。"></textarea>
      </div>
<div class="button-choice-wrapper">
  <Link href="/edit">
    <a  class="button button-grey button-choice-l">キャンセルする
  </a></Link>

<a  class="button  button-red button-choice-r ico"><Notice/>アカウントを削除
    </a>
  </div>
      </div>


</div>
</div>


 </div>
</BaseLayout>
)
