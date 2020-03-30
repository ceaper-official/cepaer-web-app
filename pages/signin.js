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
    <h1>ログイン</h1>
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
<input class="input-inner" placeholder="パスワード" type="password"></input>
<span class="input-suffix">
<Link href="/forgot-password">
    <a class="xs-text accent  hover-black">お忘れですか？</a>
</Link>
</span></div>
    <div class="action-button-wrapper">
    <button class="button-accent button">ログイン</button></div>
    <span class="actions-subtitle xs-text">または</span>
        <div class="action-button-wrapper">
    <button class="button google-button social-button"><span class="button-prefix"><Google /></span><span class="social-button-inner">Googleでログイン</span></button>
    </div>
        <div class="action-button-wrapper">
            <button class="button facebook-button social-button"><span class="button-prefix"><Facebook /></span><span class="social-button-inner">Facebookでログイン</span></button>
    </div>
    <div class="hr-text"></div>
    <div class="make-account-link">
    <p class="xs-text">アカウントがまだありませんか？</p>
    <Link href="/signup">
        <a  class="xs-text hover-black accent">作成する</a>
    </Link>
    </div>

</div>
</div>
    </div>
)
