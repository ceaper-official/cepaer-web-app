import React from "react";
import Link from "next/link";

import { db } from "@lib/firebase";
import { auth, firebase } from "@src/firebase";

import Cross from "@icons/ui/cross.js";
import Mail from "@icons/ui/mail.js";
import Password from "@icons/ui/password.js";
import Google from "@icons/social/google.js";
import Facebook from "@icons/social/facebook.js";

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
      const firestore = firebase.firestore();
      auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          return firestore.collection("users").doc(res.user.uid).set({
            name: res.user.displayName,
            originalImageUrl: res.user.photoURL,
            thumgnailMediumImageUrl: res.user.photoURL,
            created_at: firebase.firestore.FieldValue.serverTimestamp(),
            update_at: firebase.firestore.FieldValue.serverTimestamp(),
          });
        })
        .then(() => {
          location.href = "./index";
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
    const provider = new firebase.auth.GoogleAuthProvider();
    const firestore = firebase.firestore();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    auth
      .signInWithPopup(provider)
      .then((res) => {
        return firestore.collection("users").doc(res.user.uid).set({
          name: res.user.displayName,
          originalImageUrl: res.user.photoURL,
          thumgnailMediumImageUrl: res.user.photoURL,
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
          update_at: firebase.firestore.FieldValue.serverTimestamp(),
        });
      })
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
    const provider = new firebase.auth.FacebookAuthProvider();
    const firestore = firebase.firestore();
    auth
      .signInWithPopup(provider)
      .then((res) => {
        return firestore.collection("users").doc(res.user.uid).set({
          name: res.user.displayName,
          originalImageUrl: res.user.photoURL,
          thumgnailMediumImageUrl: res.user.photoURL,
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
          update_at: firebase.firestore.FieldValue.serverTimestamp(),
        });
      })
      .then((success) => {
        location.href = "./index";
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
        <div className="popup-wrapper">
          <div className="popup-inner card">
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
