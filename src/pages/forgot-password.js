import Link from "next/link";
import React from "react";

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
            パスワードのリセット手順を送信いたしますので、対象アカウントで登録されたEメールをご入力ください。届いたメールの内容に沿って、パスワードの変更手続きを進めてください。
            <Input
              placeholder="Eメール"
              icon={<Mail/>}
            />
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
