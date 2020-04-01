import Link from 'next/link';
import Instagram from "../assets/icons/social/instagram.js";
import Facebook from "../assets/icons/social/facebook.js";
import Twitter from "../assets/icons/social/twitter.js";
import Logo from "../assets/logo.js";
import BadgeNew from "../assets/icons/ui/badge-new.js";

const Footer = () => (
  <div id="footer">
    <div class="bg bg-black">
      <div class="section ">
        <div class="footer-container footer-app-grid" id="footer-app"style={{ paddingBottom: 0 }}>
        <div class="footer-app-grid-inner">
  <h2>キャンパーにとって、最高のパートナーをご用意します。</h2>
  <a class="button button-grey">近日リリース予定</a>
        </div>
        <div class="footer-app-grid-inner">
          <img src="/images/home/hero.svg"  alt="hero"/>
        </div>
      </div>
    </div>
    </div>

    <div class="bg-grey">
        <div class="section">
      <div class="footer-container " id="footer-contents">
      <Link href="/">
      <a class="logo-link">
<Logo/>
</a>
          </Link>
      <div class="footer-contents-grid">
        <div class="footer-terms-contents-inner">
          <h6>サービス</h6>
          <a class="hover-line">使い方</a>
          <a class="hover-line event-none">記事（準備中）</a>
        </div>
        <div class="footer-terms-contents-inner">
          <h6>Ceaper</h6>
          <a class="hover-line" href="/about">Ceaperについて</a>
          <div class="badge-wrapper"><a class="hover-line">ライター募集</a><BadgeNew/>
</div>
          <a class="hover-line">プレス</a>
          <a class="hover-line">投資に関する情報</a>
        </div>
        <div class="footer-terms-contents-inner">
          <h6>サポート</h6>
          <a class="hover-line">ご意見・ご要望</a>
          <a class="hover-line">ヘルプ（準備中）</a>
          <a class="hover-line"  target="_blank" rel="nofollow noreferrer noopener" href="mailto: support@ceaper.com">お問い合わせ</a>
        </div>
      </div>
    </div>
    </div>

    <div class="section">
      <div class="hr-paragraph">
      </div>
      <div class="footer-container"  id="footer-terms">
        <div class="footer-terms-inner1">
          <p class="footer-copylight"style={{ paddingLeft: 0 }}>© 2020 Ceaper</p><p>/</p>
          <Link href="/terms">
          <a class="hover-line">
利用規約
    </a>
              </Link>
              <Link href="/privacy">
              <a class="hover-line">
プライバシー        </a>
                  </Link>
          <a class="hover-line">広告掲載</a>
        </div>
      <div class="footer-terms-inner2">
<div class="footer-social">
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
      </div>
    </div>
  </div>
  </div>
  </div>
)

export default Footer
