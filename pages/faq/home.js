import BaseLayout from "../../layouts/base.js";
import Link from "next/link";
import Search from "../../assets/icons/ui/search.js";
import ArrowR from "../../assets/icons/ui/arrow-r.js";
import Feedback from "../../layouts/feedback.js";
import NavSearch from "../../layouts/faq/nav-search.js";
export default () => (
  <BaseLayout>
    <div id="page">
      <NavSearch />

      <div className="contents">
        <div className="section">
          <div className="faq-cat-wrapper">
            <div className="faq-cat-inner card">
              <div className="faq-cat-inner-r">
                <h3>Ceaperについて</h3>
                <div className="faq-cat-link-wrapper">
                  <Link href="/">
                    <a className="hover-line faq-cat-link ico-back xs-text xs-icon">
                      Ceaperとは？
                      <ArrowR />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="hover-line faq-cat-link ico-back xs-text xs-icon">
                      使い方
                      <ArrowR />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="hover-line faq-cat-link ico-back xs-text xs-icon">
                      ランキングの基準
                      <ArrowR />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="faq-cat-inner card">
              <div className="faq-cat-inner-r">
                <h3>アカウント</h3>
                <div className="faq-cat-link-wrapper">
                  <Link href="/faq/account/0アカウントの作成">
                    <a className="hover-line faq-cat-link ico-back xs-text xs-icon">
                      アカウントの作成
                      <ArrowR />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="hover-line faq-cat-link ico-back xs-text xs-icon">
                      アカウントの管理
                      <ArrowR />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="hover-line faq-cat-link ico-back xs-text xs-icon">
                      アカウントの削除
                      <ArrowR />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="faq-cat-inner card">
              <div className="faq-cat-inner-r">
                <h3>サポート</h3>
                <div className="faq-cat-link-wrapper"></div>
              </div>
            </div>

            <div className="faq-cat-inner card">
              <div className="faq-cat-inner-r">
                <h3>規約・個人情報の扱い</h3>
                <div className="faq-cat-link-wrapper"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Feedback />
    </div>
  </BaseLayout>
);
