import React from "react";

import BaseLayout from "@components/layout/BaseLayout";
import Hero from "@components/hero/Hero";
import CardForm from "@components/form/CardForm";
import Button from "@components/button/Button";

class ForgotPS extends React.Component {
  state = { Component: null };

  select = () => this.setState({ Component: Send });

  render() {
    const { Component } = this.state;
    if (Component) return <Component />;
    return (
      <BaseLayout>
        <Hero>
          <CardForm title="パスワードの再設定">
            ご登録して頂いたメールアドレス宛に、パスワードのリセット手順を送信いたします。届いたメールの内容に沿って、パスワードの変更手続きを進めてください。
            <Button onClick={this.select}>
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
