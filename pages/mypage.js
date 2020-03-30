import Link from 'next/link';

export default () => (
    <div>
    <h6>ログイン</h6>
    <div class="input"><input class="input-inner" placeHolder="Eメール or ユーザー名"></input></div>
    // jsで表示・非表示（アイコン付き）
<div class="input"><input class="input-inner" placeHolder="パスワード"></input></div>
    <Link href="/">
        <a>パスワードを忘れましたか？</a>
    </Link>
    <button class="button">ログイン</button>
    <h6 class="section-title">または</h6>
    <input class="button" placeHolder="Googleでログイン"></input>
    <input class="button" placeHolder="Facebookでログイン"></input>
    <div>hr-text</div>
    <p class="s-text">アカウントがまだありませんか？</p>
    <Link href="/signup">
        <a>作成する</a>
    </Link>

    </div>
)
