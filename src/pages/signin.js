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
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        if (!user.emailVerified) {
          user
            .sendEmailVerification()
            .then(() => {
              const email = user.email;
              console.log("確認メールを送信しました。", email);
              alert(
                "メールアドレスが認証されていません。確認メールを送信しました。"
              );
            })
            .catch((err) => {
              console.log("Error occurred: ", err);
            });
        } else {
          location.href = "/";
        }
      });
  };
  //end Email
  //Google
  handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    auth
      .signInWithPopup(provider)
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
    auth
      .signInWithPopup(provider)
      .then((success) => {
        location.href = "/";
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
              icon={<Mail />}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <Input
              ps
              placeholder="パスワード"
              icon={<Password />}
              onChange={(e) => this.setState({ password: e.target.value })}
              sub="お忘れですか？"
              href="/forgot-password"
            />
            <Button onClick={(e) => this.handleEmailSignIn(e)}>ログイン</Button>
            <SectionItem title="または" />
            <SocialButton icon=<Google /> onClick={this.handleSignIn}>
              Googleでログイン
            </SocialButton>
            <SocialButton icon=<Facebook /> onClick={this.handleFacebookSignIn}>
              Facebookでログイン
            </SocialButton>
            <LinkItem
              title="アカウントがまだありませんか？"
              text="作成"
              href="/signup"
            />
          </CardForm>
        </Hero>
      </BaseLayout>
    );
  }
}
export default SignIn;
