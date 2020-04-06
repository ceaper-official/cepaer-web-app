import React from "react";
import Link from 'next/link';

export default function NavEdit() {
  return (
<div class = 'edit-nav' > <div class="edit-nav-inner">
  <Link href="#profile">
    <a class="xs-text hover-accent grey">プロフィール</a>
  </Link>
  <Link href="#settings">
    <a class="xs-text hover-accent grey">アカウント設定</a>
  </Link>
  <Link href="#password">
    <a class="xs-text hover-accent grey">パスワード</a>
  </Link>
  <Link href="#social-settings">
    <a class="xs-text hover-accent grey">ソーシャルメディア</a>
  </Link>
  <Link href="#connections">
    <a class="xs-text hover-accent grey">外部サービスの連携</a>
  </Link>
  <Link href="#notifications">
    <a class="xs-text hover-accent grey">お知らせ</a>
  </Link>
  <Link href="#save">
    <a class="xs-text hover-accent grey">保存する</a>
  </Link>
</div>
</div>
  );
}
