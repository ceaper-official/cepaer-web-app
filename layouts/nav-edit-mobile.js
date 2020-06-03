import React from "react";
import Link from "next/link";
import Down from "../assets/icons/ui/down.js";

export default function NavEditMobile() {
  return (
    <div className="side-nav-mobile">
      <input
        id="side-nav-check"
        className="side-nav-label-check"
        type="checkbox"
      />
      <label className="side-nav-label ico xs-text" for="side-nav-check">
        プロフィール編集
        <Down />
      </label>
      <div className="side-nav-mobile-inner">
        <Link href="#profile">
          <a className="xs-text">プロフィール</a>
        </Link>
        <Link href="#settings">
          <a className="xs-text">アカウント設定</a>
        </Link>
        <Link href="#password">
          <a className="xs-text">パスワード</a>
        </Link>
        <Link href="#social-settings">
          <a className="xs-text">ソーシャルメディア</a>
        </Link>
        <Link href="#connections">
          <a className="xs-text">外部サービスのログイン連携</a>
        </Link>
        <Link href="#notifications">
          <a className="xs-text">お知らせ</a>
        </Link>
        <Link href="/delete">
          <a className="xs-text">アカウントの無効化</a>
        </Link>
        <Link href="#save">
          <a className="xs-text">保存する</a>
        </Link>
      </div>
    </div>
  );
}
