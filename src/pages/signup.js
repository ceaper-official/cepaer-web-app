import React from "react";
import Link from "next/link";

import { auth, firebase } from "@src/firebase";

import Cross from "@icons/ui/cross.js";
import Mail from "@icons/ui/mail.js";
import Password from "@icons/ui/password.js";
import Google from "@icons/social/google.js";
import Facebook from "@icons/social/facebook.js";


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
        alert(
          "必要な情報を入力してください。全ての項目を入力した後に、このメッセージが出る場合は、メールアドレスは既に登録されています。"
        );
        console.log("firebase error", error);
      });
  };
  //end Email
  //Google
  handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    auth
      .signInWithPopup(provider)
      .then(() => {
        location.href = "./index";
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
        location.href = "./index";
      })
      .catch((error) => {
        alert("問題が発生しました。最初からやり直してください。");
        console.log(error);
      });
  };
  //end facebook
  state = { Component: null };
  handleSignUp = (e) => this.setState({ Component: SendMail });
  render() {
    const { Component } = this.state;
    if (Component) return <Component />;
    return (
      <div className="popup-row">
        <div className="popup-wrapper">
          <div className="popup-inner card">
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
              <button className="social-button" onClick={this.handleSignIn}>
                <span className="button-prefix">
                  <Google />
                </span>
                <span className="social-button-inner">Googleでログイン</span>
              </button>
            </div>
            <div className="action-button-wrapper">
              <button
                className="social-button"
                onClick={this.handleFacebookSignIn}
              >
                <span className="button-prefix">
                  <Facebook />
                </span>
                <span className="social-button-inner">Facebookでログイン</span>
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

function SendMail() {
  return (
    <div className="popup-row">
      <div className="popup-wrapper">
        <div className="popup-inner card">
          <h1>ありがとうございます！</h1>
          <p className="xs-text">
            入力して頂いたメールアドレス宛に、確認メールを送信しました。届いたメールのリンクに沿って、アカウントの作成を進めてください。
          </p>
        </div>
      </div>
    </div>
  );
}
