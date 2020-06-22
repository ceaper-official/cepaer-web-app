import React from "react";
import Cross from "../assets/icons/ui/cross.js";
import Mail from "../assets/icons/ui/mail.js";
import Password from "../assets/icons/ui/password.js";
import Google from "../assets/icons/social/google.js";
import Facebook from "../assets/icons/social/facebook.js";
import Link from "next/link";
import { auth, firebase } from "../src/firebase";

class SignUp extends React.Component {
  //Email作成
  constructor(props) {
    // Stateの定義
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSignUp = (e) => {
    e.preventDefault();
    // stateからemailとpasswordを取得する
    const { email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // 存在確認済のメールアドレスかどうか(true or false)
        var verified = firebase.auth().currentUser.emailVerified;
        console.log(verified);
        // 未確認のメールアドレスの場合、メールを送信する
        if (!verified) {
          // メール送信処理
          firebase.auth().currentUser.sendEmailVerification();

          var email = firebase.auth().currentUser.email;
          console.log(email);
        }
        alert(
          "確認メールを送信しました。メールから承認をするとアカウントが有効になります。"
        );
        console.log(user);
        this.setState({ email: null, password: null });
      })
      .catch((error) => {
        alert("すでにこのメールアドレスは登録されています。");
        console.log("firebase error", error);
      });
  };
  //end Email
  state = { Component: null };
  render() {
    const { Component } = this.state;
    if (Component) return <Component />;
    return (
      <div className="popup-row">
        <div className="popup-row-bg"></div>
        <div className="popup-wrapper">
          <div className="popup-inner card">
            <div className="popup-row-close">
              <Cross />
            </div>
            <h1>アカウント作成</h1>
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
            </div>
            <div className="action-button-wrapper">
              <button
                className="button-black button"
                onClick={(e) => this.handleSignUp(e)}
              >
                アカウント作成
              </button>
            </div>
            <p className="xs-text grey">
              アカウントを作成する事で、Ceaperの
              <Link href="/terms">
                <a className="border-text grey xs-text">利用規約</a>
              </Link>
              、
              <Link href="/privacy">
                <a className="border-text grey xs-text">
                  データに関するポリシー、Cookieポリシー
                </a>
              </Link>
              に同意するものとします。
            </p>
            <span className="popup-subtitle xs-text">または</span>
            <div className="action-button-wrapper">
              <button className="social-button">
                <span className="button-prefix">
                  <Google />
                </span>
                <span className="social-button-inner">Googleで作成</span>
              </button>
            </div>
            <div className="action-button-wrapper">
              <button className="social-button">
                <span className="button-prefix">
                  <Facebook />
                </span>
                <span className="social-button-inner">Facebookで作成</span>
              </button>
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
  }
}

export default SignUp;
