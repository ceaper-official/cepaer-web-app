import Link from "next/link";
import Instagram from "../assets/icons/social/instagram.js";
import Facebook from "../assets/icons/social/facebook.js";
import Twitter from "../assets/icons/social/twitter.js";
import Logo from "../assets/logo.js";
import BadgeNew from "../assets/icons/ui/badge-new.js";

const Footer = () => (
  <div id="footer">
    <div className="bg-snow">
      <div className="section">
        <div className="footer-container " id="footer-contents">
          <Link href="/">
            <a className="logo-link">
              <Logo />
            </a>
          </Link>
          <div className="footer-contents-grid">
            <div className="footer-terms-contents-inner">
              <h6>サービス</h6>
              <a className="hover-line">使い方</a>
              <a className="hover-line event-none">記事（準備中）</a>
            </div>
            <div className="footer-terms-contents-inner">
              <h6>Ceaper</h6>
              <a className="hover-line" href="/about">
                Ceaperについて
              </a>
              <div className="badge-wrapper">
                <a className="hover-line">ライター募集</a>
                <BadgeNew />
              </div>
              <Link href="/press">
                <a className="hover-line">プレス</a>
              </Link>
            </div>
            <div className="footer-terms-contents-inner">
              <h6>サポート</h6>
              <Link href="/feedback">
                <a className="hover-line">ご意見・ご要望</a>
              </Link>

              <Link href="/faq/home">
                <a className="hover-line">よくある質問</a>
              </Link>
              <a
                className="hover-line"
                target="_blank"
                rel="nofollow noreferrer noopener"
                href="mailto: support@ceaper.com"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="hr-paragraph"></div>
        <div className="footer-container" id="footer-terms">
          <div className="footer-terms-inner1">
            <p
              className="footer-copylight"
              style={{
                paddingLeft: 0,
              }}
            >
              © 2020 Ceaper
            </p>
            <p>/</p>
            <Link href="/terms">
              <a className="hover-line">利用規約</a>
            </Link>
            <Link href="/privacy">
              <a className="hover-line">プライバシー</a>
            </Link>
            <a className="hover-line">広告掲載</a>
          </div>
          <div className="footer-terms-inner2">
            <div className="footer-social">
              <a className="user-social-link">
                <Instagram />
              </a>
              <a className="user-social-link">
                <Facebook />
              </a>
              <a className="user-social-link">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
