import React from "react";
import Link from 'next/link';

export default function NavFAQ() {
  return (<div className='side-nav-desktop'>
    <div className="side-nav-desktop-inner">
      <Link href="/faq/home">
        <a className="xs-text hover-accent">ホーム</a>
      </Link>
      <Link href="/">
        <a className="xs-text hover-accent grey">Ceaperについて</a>
      </Link>

      <Link href="/faq/account/01アカウントの作成">
        <a className="xs-text hover-accent grey">アカウントの作成</a>
      </Link>

      <Link href="/">
        <a className="xs-text hover-accent grey">アカウントの管理</a>
      </Link>

      <Link href="/">
        <a className="xs-text hover-accent grey">サポート</a>
      </Link>

      <Link href="/">
        <a className="xs-text hover-accent grey">プライバシー</a>
      </Link>

    </div>
  </div>);
}
