import React from "react";

import { auth, firebase } from "@src/firebase";

import BaseLayout from "@components/layout/BaseLayout";
import Hero from "@components/hero/Hero";
import CardForm from "@components/form/CardForm";
import Button from "@components/button/Button";

class ForgotPS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      Component: null,
    };
  }

  select = (e) => this.setState({ Component: Send })

  onClickPasswordReset = (e) => {
    e.preventDefault();
    const user = firebase.auth().currentUser;
    const { email, password } = this.state;
    if (user != null) {
      const email = user.email;
      firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        console.log('success')
      })
      .catch((error) => {
        alert('パスワードリセットのメール送信に失敗しました。時間をおいて再度お試しください');
      });
    }
  };

  render() {
    const { Component } = this.state;
    if (Component) return <Component />;
    return (
      <BaseLayout>
        <Hero>
          <CardForm title="パスワードの再設定">
            ご登録して頂いたメールアドレス宛に、パスワードのリセット手順を送信いたします。届いたメールの内容に沿って、パスワードの変更手続きを進めてください。
            <Button onClick={(e) => {
              this.onClickPasswordReset(e);
              this.select(e);
            }} >
              パスワードを再設定
            </Button>
          </CardForm>
        </Hero>
      </BaseLayout>
    );
  }
}
export default ForgotPS;

function Send() {
  return (
    <BaseLayout>
      <Hero>
        <CardForm title="確認用のメールを送信しました">
          届いたメールの内容に沿って、パスワードの再設定を進めてください。
        </CardForm>
      </Hero>
    </BaseLayout>
  );
}
