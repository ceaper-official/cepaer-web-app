import React from "react";
import Link from "next/link";

import { db } from "@lib/firebase";
import { auth, firebase } from "@src/firebase";

import BaseLayout from "@components/layout/BaseLayout";
import Hero from "@components/hero/Hero";
import Content from "@components/content/Content";
import CardForm from "@components/form/CardForm";
import Input from "@components/form/Input";
import SectionItem from "@components/form/SectionItem";
import LinkItem from "@components/form/LinkItem";
import Button from "@components/button/Button";
import SocialButton from "@components/button/SocialButton";

import Cross from "@icons/ui/cross.js";
import Mail from "@icons/ui/mail.js";
import Password from "@icons/ui/password.js";
import Google from "@icons/social/google.js";
import Facebook from "@icons/social/facebook.js";

class SignIn extends React.Component {
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
      <BaseLayout>
        <Hero>
          <CardForm title="ログイン">
            <Input
              placeholder="Eメール"
              icon={<Mail/>}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <Input ps
              placeholder="パスワード"
              icon={<Password/>}
              onChange={(e) => this.setState({ password: e.target.value })}
              sub="お忘れですか？"
              href="/forgot-password"
            />
            <Button onClick={(e) => this.handleEmailSignIn(e)}>
              ログイン
            </Button>
            <SectionItem title="または"/>
            <SocialButton icon=<Google/> onClick={this.handleSignIn}>
              Googleでログイン
            </SocialButton>
            <SocialButton icon=<Facebook/> onClick={this.handleFacebookSignIn}>
              Facebookでログイン
            </SocialButton>
            <LinkItem
              title="アカウントがまだありませんか？"
              text="作成する"
              href="/signup"
            />
          </CardForm>
      </Hero>
    </BaseLayout>
    );
  }
}
export default SignIn;
