import BaseLayout from '../layouts/base.js'
import Link from 'next/link';
import Instagram from "../assets/icons/social/instagram.js";
import Facebook from "../assets/icons/social/facebook.js";
import Twitter from "../assets/icons/social/twitter.js";
import  StarSolid from "../assets/icons/ui/star-solid.js";
import  Mail from "../assets/icons/ui/mail.js";

export default () => (
  <BaseLayout>
  <div id="page">
  <div className='contents'>
  <div className='section center-section'>
<h1 className='title'>ブランドキット</h1>
<p>Ceaperのロゴの使用は、必ずCeaperの了諾を得てからの使用となります。下記のリンクから、明確な使用目的、内容の詳細を記載したメールを送信してください。</p>
<a className="button add-button button-black ico"  target="_blank" rel="nofollow noreferrer noopener" href="mailto: support@ceaper.com"><Mail/>連絡をする</a>
</div>
 </div>

 </div>
</BaseLayout>
)
