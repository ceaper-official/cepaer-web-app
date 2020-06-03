import Link from "next/link";

export default () => (
  <div>
    <h6>ログイン</h6>
    <div className="input">
      <input
        className="input-inner"
        placeHolder="Eメール or ユーザー名"
      ></input>
    </div>
    // jsで表示・非表示（アイコン付き）
    <div className="input">
      <input className="input-inner" placeHolder="パスワード"></input>
    </div>
    <Link href="/">
      <a>パスワードを忘れましたか？</a>
    </Link>
    <button className="button">ログイン</button>
    <h6 className="section-title">または</h6>
    <input className="button" placeHolder="Googleでログイン"></input>
    <input className="button" placeHolder="Facebookでログイン"></input>
    <div>hr-text</div>
    <p className="s-text">アカウントがまだありませんか？</p>
    <Link href="/signup">
      <a>作成する</a>
    </Link>
  </div>
);
