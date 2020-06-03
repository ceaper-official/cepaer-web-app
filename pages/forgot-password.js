import Cross from "../assets/icons/ui/cross.js";
import Mail from "../assets/icons/ui/mail.js";
import Password from "../assets/icons/ui/password.js";
import Link from "next/link";

export default () => (
  <div className="actions-row">
    <div className="actions-row-bg"></div>
    <div className="actions-wrapper">
      <div className="actions-inner card">
        <div className="actions-row-close">
          <Cross />
        </div>
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
          <button className="button-snow button">パスワードを再設定</button>
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
