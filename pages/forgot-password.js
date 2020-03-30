import Close from "../assets/icons/ui/close.js";
import Mail from "../assets/icons/ui/mail.js";
import Password from "../assets/icons/ui/password.js";
import Link from 'next/link';

export default () => (
    <div class="actions-row">
    <div class="actions-row-bg"></div>
    <div class="actions-wrapper">
    <div class="actions-inner card">
    <div class="actions-row-close"><Close /></div>
    <h6>パスワードの再設定</h6>
    <p class="xs-text">対象アカウントで登録された Eメールをご入力ください。パスワードのリセット手順を送信いたします。</p>
    <div class="action-button-wrapper input-wrapper">
    <span class="input-prefix">
    <Mail />
    </span>
    <input class="input-inner" placeholder="Eメール"></input>
</div>
    <div class="action-button-wrapper">
    <button class="button-accent button">パスワードを再設定</button></div>

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
