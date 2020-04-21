import React from "react";
import Link from 'next/link';
import Down from "../../assets/icons/ui/down.js";

export default function NavFAQ() {
  return (
<div>
    <div className='side-nav-desktop'>
    <div className="side-nav-desktop-inner">
      <Link href="/faq/home">
        <a className="xs-text grey">ホーム</a>
      </Link>
      <Link href="/">
        <a className="xs-text grey">Ceaperについて</a>
      </Link>

      <Link href="/faq/account/0アカウントの作成">
        <a className="xs-text grey">アカウントの作成</a>
      </Link>

      <Link href="/">
        <a className="xs-text grey">アカウントの管理</a>
      </Link>

      <Link href="/">
        <a className="xs-text grey">サポート</a>
      </Link>

      <Link href="/">
        <a className="xs-text grey">プライバシー</a>
      </Link>

    </div>
  </div>
  <NavFAQMobile/>
  </div>
);
}


function NavFAQMobile() {
  return (
    <div className="side-nav-mobile">
      <input id="side-nav-check" className="side-nav-label-check" type="checkbox"/>
      <label className="side-nav-label ico xs-text" for="side-nav-check">規約<Down/></label>
      <div className="side-nav-mobile-inner">
        <Link href="/privacy">
                <a className="xs-text">プライバシーポリシー</a>
            </Link>
            <Link href="/terms">
                    <a className="xs-text">利用規約</a>
                </Link>
      </div>
    </div>
  );
}
