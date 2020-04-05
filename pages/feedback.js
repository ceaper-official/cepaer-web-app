import BaseLayout from '../layouts/base.js'
import Link from 'next/link';
import  Message from "../assets/icons/ui/message.js";
import  Bug from "../assets/icons/ui/bug.js";
import  StarSolid from "../assets/icons/ui/star-solid.js";
import  Rate5 from "../assets/icons/ui/rate5.js";
import  Rate4 from "../assets/icons/ui/rate4.js";
import  Rate3 from "../assets/icons/ui/rate3.js";
import  Rate2 from "../assets/icons/ui/rate2.js";
import  Rate1 from "../assets/icons/ui/rate1.js";

export default () => (
  <BaseLayout>
  <div id="page">
  <div class='contents'>
  <div class='section center-section'>
<h1 class='title'>多種多彩なフィードバックをお待ちしております。</h1>
<p  style={{ marginBottom: 10 }}>私達Ceaperは常にユーザーの方が心地良くサービスを使えるように新しい機能の開発・修正に挑んでいます。Ceaperのサービスを使用する中で、機能について不満に思った事や、ご要望などがございましたら、お気軽にご連絡ください。</p>
<p class="xs-text grey"  style={{ margin: 0 }}>当ページはお問い合わせのフォームではない為、原則ご返信は出来かねます。致命的な機能のバグ・不具合のご報告につきましては、ご返信と共に、早急なご対応をいたします。また返答が必要な質問やサポートが必要な場合は、  <a class="grey border-text xs-text"  target="_blank" rel="nofollow noreferrer noopener" href="mailto: support@ceaper.com">サポート窓口</a>までお問い合わせください。</p>
</div>
 </div>
 <div class='contents'>
 <div class='section center-section'>

 {/*アクションを起こすと、次の項目が表示*/}
  <div class="feedback-wrapper">
  <h5 class="hr-section-title">どのような内容ですか？</h5>
  <div class = "form-select">
  <a  class="icon-button ico select-button select-button-bottom">  <Message/>フィードバックについて
</a>
<a  class="icon-button ico select-button">  <Bug/>バグ・不具合について
</a>
   </div>
   </div>

   <div class="feedback-wrapper">
   <h5 class="hr-section-title"> Ceaperのサービスに満足していますか？</h5>
   {/*ホバー で、選択。フォームにデータ出力*/}
   <div class = "form-select">
     <div class = " select-rating-wrapper">
     <a  class="select-button">
     <Rate1/>
     </a>
     <a  class="select-button">
     <Rate2/>
     </a>
     <a  class="select-button">
     <Rate3/>
     </a>
     <a  class="select-button">
     <Rate4/>
     </a>
     <a  class="select-button">
     <Rate5/>
     </a>
       < /div>
    </div>
    </div>

     <div class="feedback-wrapper">
     <h5 class="hr-section-title">内容を詳しくお話しください</h5>
     <div class = "form-select">
     {/*「どのような内容ですか？」の選択に応じて、placeholderの文を変更する*/}
     <textarea class="feedback-area" placeholder="フィードバックについての場合：Ceaperのサービスを利用して感じた事、良かった点または、改善点などもお話しください。　バグ・不具合についての場合：どのような状況・操作で問題が発生しましたか？ 問題が発生した時の状況を詳しくお話しください。内容に応じて早急に対応させていただきます。"></textarea>
      </div>
      <a  class="button form-submit button-black">フィードバックを送る
    </a>
      </div>


</div>
</div>


 </div>
</BaseLayout>
)
