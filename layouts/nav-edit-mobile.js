import React from "react";
import Link from 'next/link';
import Down from "../assets/icons/ui/down.js";

export default function NavEditMobile() {
  return (
    <div class="side-nav-mobile">
      <input id="side-nav-check" class="side-nav-label-check" type="checkbox"/>
      <label class="side-nav-label ico xs-text" for="side-nav-check">プロフィール編集<Down/></label>
      <div class="side-nav-mobile-inner">
        <Link href="#profile">
          <a class="xs-text">プロフィール</a>
        </Link>
        <Link href="#settings">
          <a class="xs-text">アカウント設定</a>
        </Link>
        <Link href="#password">
          <a class="xs-text">パスワード</a>
        </Link>
        <Link href="#social-settings">
          <a class="xs-text">ソーシャルメディア</a>
        </Link>
        <Link href="#connections">
          <a class="xs-text">外部サービスの連携</a>
        </Link>
        <Link href="#notifications">
          <a class="xs-text">お知らせ</a>
        </Link>
        <Link href="/delete">
          <a class="xs-text">アカウントの無効化</a>
        </Link>
        <Link href="#save">
          <a class="xs-text">保存する</a>
        </Link>
      </div>
    </div>
  );
}
