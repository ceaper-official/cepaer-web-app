import React from "react";
import { auth, firebase } from "../src/firebase";
import Cross from "../assets/icons/ui/cross.js";
import Mail from "../assets/icons/ui/mail.js";
import Password from "../assets/icons/ui/password.js";
import Google from "../assets/icons/social/google.js";
import Facebook from "../assets/icons/social/facebook.js";
import Link from "next/link";
class Home extends React.Component {
  //Email
  constructor(props) {
    // Stateの定義
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleEmailSignIn = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    var verified = firebase.auth().currentUser.emailVerified;
    console.log(verified);
    if (!verified) {
      // メアド確認終わってない
      firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log;
      alert("メールアドレス認証が完了していません。");
    } else {
      // メアド確認終わってる
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          alert("ログインに成功しました。");
        })
        .catch((err) => {
          alert("メールアドレスかパスワードが違います。");
          console.log(err);
        });
    }
  };
  //end Email
  //Google
  handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    auth
      .signInWithPopup(provider)
      .then(() => {
        alert("ログインに成功しました。");
      })
      .catch((err) => {
        alert("問題が発生しました。最初からやり直してください。");
        console.log(err);
      });
  };
  //end Google
  //facebook
  handleFacebookSignIn = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
      })
      .catch((error) => {
        alert("問題が発生しました。最初からやり直してください。");
        console.log(error);
      });
  };
  //end facebook
  render() {
    return (
      <div className="popup-row">
        <div className="popup-row-bg"></div>
        <div className="popup-wrapper">
          <div className="popup-inner card">
            <div className="popup-row-close">
              <Cross />
            </div>
            <h1>ログイン</h1>
            <div className="action-button-wrapper input-wrapper">
              <span className="input-prefix">
                <Mail />
              </span>
              <input
                className="input-inner"
                placeholder="Eメール"
                onChange={(e) => this.setState({ email: e.target.value })}
              ></input>
            </div>
            <div className="action-button-wrapper input-wrapper">
              <span className="input-prefix">
                <Password />
              </span>
              <input
                className="input-inner"
                placeholder="パスワード"
                type="password"
                onChange={(e) => this.setState({ password: e.target.value })}
              ></input>
              <span className="input-suffix">
                <Link href="/forgot-password">
                  <a className="xs-text support  hover-black">お忘れですか？</a>
                </Link>
              </span>
            </div>
            <div className="action-button-wrapper">
              <button
                onClick={(e) => this.handleEmailSignIn(e)}
                className="button-black button"
              >
                ログイン
              </button>
            </div>
            <span className="popup-subtitle xs-text">または</span>
            <div className="action-button-wrapper">
              <button onClick={this.handleSignIn} className="social-button">
                <span className="button-prefix">
                  <Google />
                </span>
                <span className="social-button-inner">Googleでログイン</span>
              </button>
            </div>
            <div className="action-button-wrapper">
              <button
                onClick={this.handleFacebookSignIn}
                className="social-button"
              >
                <span className="button-prefix">
                  <Facebook />
                </span>
                <span className="social-button-inner">Facebookでログイン</span>
              </button>
            </div>
            <div className="hr-text"></div>
            <div className="make-account-link">
              <p className="xs-text">アカウントがまだありませんか？</p>
              <Link href="/signup">
                <a className="xs-text hover-black accent">作成する</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
