import React from "react";
import Link from 'next/link';

export default function NavEdit() {
  return (
<div className = 'side-nav-desktop' > <div className="side-nav-desktop-inner">
  <Link href="#profile">
    <a className="xs-text grey">プロフィール</a>
  </Link>
  <Link href="#settings">
    <a className="xs-text grey">アカウント設定</a>
  </Link>
  <Link href="#password">
    <a className="xs-text grey">パスワード</a>
  </Link>
  <Link href="#social-settings">
    <a className="xs-text grey">ソーシャルメディア</a>
  </Link>
  <Link href="#connections">
    <a className="xs-text grey">外部サービスのログイン連携</a>
  </Link>
  <Link href="#notifications">
    <a className="xs-text grey">お知らせ</a>
  </Link>
  <Link href="/delete">
    <a className="xs-text grey">アカウントの無効化</a>
  </Link>
  <Link href="#save">
    <a className="xs-text grey">保存する</a>
  </Link>
</div> </div>
  );
}
