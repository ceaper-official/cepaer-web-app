import Cross from "../assets/icons/ui/cross.js";
import Mail from "../assets/icons/ui/mail.js";
import Password from "../assets/icons/ui/password.js";
import Link from 'next/link';

export default () => (
    <div class="actions-row">
    <div class="actions-row-bg"></div>
    <div class="actions-wrapper">
    <div class="actions-inner card">
    <div class="actions-row-close"><Cross /></div>
    <h1>パスワードの再設定</h1>
    <p class="xs-text">パスワードのリセット手順を送信いたしますので、対象アカウントで登録された Eメールをご入力ください。届いたメールの内容に沿って、パスワードの変更手続きを進めてください。</p>
    <div class="action-button-wrapper input-wrapper">
    <span class="input-prefix">
    <Mail />
    </span>
    <input class="input-inner" placeholder="Eメール"></input>
</div>
    <div class="action-button-wrapper">
    <button class="button-black button">パスワードを再設定</button></div>

    <div class="hr-text"></div>
    <div class="make-account-link">
    <p class="xs-text">すでにアカウントをお持ちですか？</p>
    <Link href="/signin">
        <a  class="xs-text hover-black accent">ログイン</a>
    </Link>
    </div>
</div>
</div>
    </div>
)
