import Close from "../assets/icons/ui/close.js";
import Mail from "../assets/icons/ui/mail.js";
import Password from "../assets/icons/ui/password.js";
import Google from "../assets/icons/social/google.js";
import Facebook from "../assets/icons/social/facebook.js";
import Link from 'next/link';

export default () => (
    <div class="actions-row">
    <div class="actions-row-bg"></div>
    <div class="actions-wrapper">
    <div class="actions-inner card">
    <div class="actions-row-close"><Close /></div>
    <h1>アカウント作成</h1>
    <div class="action-button-wrapper input-wrapper">
    <span class="input-prefix">
    <Mail />
    </span>
    <input class="input-inner" placeholder="Eメール"></input>
</div>
<div class="action-button-wrapper input-wrapper">
<span class="input-prefix">
<Password />
</span>
<input class="input-inner" placeholder="パスワード" type="password"></input></div>
    <div class="action-button-wrapper">
    <button class="button-accent button">アカウント作成</button>
            </div>
            <p class="xs-text">アカウントを作成する事で、Ceaperの<Link href="/terms">
                    <a class="border-text">利用規約</a>
                </Link>、
                <Link href="/privacy">
                        <a class="border-text">データに関するポリシー、Cookieポリシー</a>
                    </Link>に同意するものとします。</p>
    <span class="actions-subtitle xs-text">または</span>
    <div class="action-button-wrapper">
<button class="button google-button social-button"><span class="button-prefix"><Google /></span><span class="social-button-inner">Googleで作成</span></button>
</div>
    <div class="action-button-wrapper">
        <button class="button facebook-button social-button"><span class="button-prefix"><Facebook /></span><span class="social-button-inner">Facebookで作成</span></button>
</div>
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
