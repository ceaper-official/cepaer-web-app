import Cross from "../assets/icons/ui/cross.js";
import Mail from "../assets/icons/ui/mail.js";
import Password from "../assets/icons/ui/password.js";
import Google from "../assets/icons/social/google.js";
import Facebook from "../assets/icons/social/facebook.js";
import Link from 'next/link';

export default () => (
    <div className="actions-row">
    <div className="actions-row-bg"></div>
    <div className="actions-wrapper">
    <div className="actions-inner card">
    <div className="actions-row-close"><Cross /></div>
    <h1>ログイン</h1>
    <div className="action-button-wrapper input-wrapper">
    <span className="input-prefix">
    <Mail />
    </span>
    <input className="input-inner" placeholder="Eメール"></input>
</div>
<div className="action-button-wrapper input-wrapper">
<span className="input-prefix">
<Password />
</span>
<input className="input-inner" placeholder="パスワード" type="password"></input>
<span className="input-suffix">
<Link href="/forgot-password">
    <a className="xs-text accent  hover-black">お忘れですか？</a>
</Link>
</span></div>
    <div className="action-button-wrapper">
    <button className="button-black button">ログイン</button></div>
    <span className="actions-subtitle xs-text">または</span>
        <div className="action-button-wrapper">
    <button className="button google-button social-button"><span className="button-prefix"><Google /></span><span className="social-button-inner">Googleでログイン</span></button>
    </div>
        <div className="action-button-wrapper">
            <button className="button facebook-button social-button"><span className="button-prefix"><Facebook /></span><span className="social-button-inner">Facebookでログイン</span></button>
    </div>
    <div className="hr-text"></div>
    <div className="make-account-link">
    <p className="xs-text">アカウントがまだありませんか？</p>
    <Link href="/signup">
        <a  className="xs-text hover-black accent">作成する</a>
    </Link>
    </div>

</div>
</div>
    </div>
)
