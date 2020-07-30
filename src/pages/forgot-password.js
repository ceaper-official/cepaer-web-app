import Link from "next/link";
import React from "react";

import Cross from "@icons/ui/cross.js";
import Mail from "@icons/ui/mail.js";
import Password from "@icons/ui/password.js";

class ForgotPS extends React.Component {
  state = { Component: null };

  select = () => this.setState({ Component: Send });

  render() {
    const { Component } = this.state;
    if (Component) return <Component />;
    return (
      <div className="popup-row">
        <div className="popup-wrapper">
          <div className="popup-inner card">
            <h1>パスワードの再設定</h1>
            <p className="xs-text">
              パスワードのリセット手順を送信いたしますので、対象アカウントで登録された
              Eメールをご入力ください。届いたメールの内容に沿って、パスワードの変更手続きを進めてください。
            </p>
            <div className="action-button-wrapper input-wrapper">
              <span className="input-prefix">
                <Mail />
              </span>
              <input className="input-inner" placeholder="Eメール"></input>
            </div>
            <div className="action-button-wrapper">
              <button className="button-snow button" onClick={this.select}>
                パスワードを再設定
              </button>
            </div>

            <div className="hr-text"></div>
            <div className="make-account-link">
              <p className="xs-text">すでにアカウントをお持ちですか？</p>
              <Link href="/signin">
                <a className="xs-text hover-black accent">ログイン</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ForgotPS;

function Send() {
  return (
    <div className="popup-row">
      <div className="popup-wrapper">
        <div className="popup-inner card">
          <h1>確認メールを送信しました。</h1>
          <p className="xs-text">
            届いたメールの内容に沿って、パスワードの再設定を進めてください。
          </p>
        </div>
      </div>
    </div>
  );
}
