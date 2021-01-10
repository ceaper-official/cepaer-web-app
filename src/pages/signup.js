import React from "react";
import Link from "next/link";

import { getCurrentUser, storage, db } from "@lib/firebase";
import { auth, firebase } from "@src/firebase";

import BaseLayout from "@components/layout/BaseLayout";
import Hero from "@components/hero/Hero";
import Content from "@components/content/Content";
import CardForm from "@components/form/CardForm";
import Input from "@components/form/Input";
import SectionItem from "@components/form/SectionItem";
import LinkItem from "@components/form/LinkItem";
import NoteItem from "@components/form/NoteItem";
import Button from "@components/button/Button";
import SocialButton from "@components/button/SocialButton";

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

  handleEmailSignUp = (e) => {
    e.preventDefault();
    // stateからemailとpasswordを取得する
    const { email, password } = this.state;
    const db = firebase.firestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        return db.collection("users").doc(res.user.uid).set({
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
          name: res.user.displayName,
          thumgnailMediumImageUrl: res.user.photoURL,
          originalImageUrl: res.user.photoURL,
          update_at: firebase.firestore.FieldValue.serverTimestamp(),
        });
      })
      .then(() => {
        // 存在確認済のメールアドレスかどうか(true or false)
        const user = firebase.auth().currentUser;
        console.log(user);
        // 未確認のメールアドレスの場合、メールを送信する
        if (!user.emailVerified) {
          // メール送信処理
          user.sendEmailVerification();

          const email = user.email;
          console.log("確認メールを送信しました。", email);
        }
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
  handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const db = firebase.firestore();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        return db.collection("users").doc(res.user.uid).set({
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
          name: res.user.displayName,
          thumgnailMediumImageUrl: res.user.photoURL,
          originalImageUrl: res.user.photoURL,
          update_at: firebase.firestore.FieldValue.serverTimestamp(),
        });
      })
      .then(() => {
        location.href = "/";
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
    const db = firebase.firestore();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        return db.collection("users").doc(res.user.uid).set({
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
          name: res.user.displayName,
          thumgnailMediumImageUrl: res.user.photoURL,
          originalImageUrl: res.user.photoURL,
          update_at: firebase.firestore.FieldValue.serverTimestamp(),
        });
      })
      .then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        location.href = "/";
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
      <BaseLayout>
        <Hero>
          <CardForm title="アカウントの作成">
            <Input
              placeholder="Eメール"
              icon={<Mail />}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <Input
              ps
              placeholder="パスワード"
              icon={<Password />}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <Button
              onClick={(e) => {
                this.handleSignUp(e);
                this.handleEmailSignUp(e);
              }}
            >
              アカウントを作成
            </Button>
            <NoteItem>
              アカウントを作成する事で、Ceaperの
              <Link href="/privacy">
                <a>利用規約</a>
              </Link>
              、データに関するポリシー、Cookieポリシーに同意するものとします。
            </NoteItem>
            <SectionItem title="または" />
            <SocialButton icon=<Google /> onClick={this.handleGoogleSignIn}>
              Googleで作成
            </SocialButton>
            <SocialButton icon=<Facebook /> onClick={this.handleFacebookSignIn}>
              Facebookで作成
            </SocialButton>
            <LinkItem
              title="すでにアカウントをお持ちですか？"
              text="ログイン"
              href="/signin"
            />
          </CardForm>
        </Hero>
      </BaseLayout>
    );
  }
}

export default SignUp;

function SendMail() {
  return (
    <BaseLayout>
      <Hero>
        <CardForm title="ありがとうございます">
          入力して頂いたメールアドレス宛に、確認メールを送信しました。届いたメールのリンクに沿って、アカウントの作成を進めてください。
        </CardForm>
      </Hero>
    </BaseLayout>
  );
}
