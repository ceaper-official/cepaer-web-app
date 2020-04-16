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
    <h1>アカウント作成</h1>
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
<input className="input-inner" placeholder="パスワード" type="password"></input></div>
    <div className="action-button-wrapper">
    <button className="button-black button">アカウント作成</button>
            </div>
            <p className="xs-text grey">アカウントを作成する事で、Ceaperの<Link href="/terms">
                    <a className="border-text grey xs-text">利用規約</a>
                </Link>、
                <Link href="/privacy">
                        <a className="border-text grey xs-text">データに関するポリシー、Cookieポリシー</a>
                    </Link>に同意するものとします。</p>
    <span className="actions-subtitle xs-text">または</span>
    <div className="action-button-wrapper">
<button className="button google-button social-button"><span className="button-prefix"><Google /></span><span className="social-button-inner">Googleで作成</span></button>
</div>
    <div className="action-button-wrapper">
        <button className="button facebook-button social-button"><span className="button-prefix"><Facebook /></span><span className="social-button-inner">Facebookで作成</span></button>
</div>
    <div className="hr-text"></div>
    <div className="make-account-link">
    <p className="xs-text">すでにアカウントをお持ちですか？</p>
    <Link href="/signin">
        <a  className="xs-text hover-black accent">ログイン</a>
    </Link>
    </div>

</div>
</div>
    </div>
)
