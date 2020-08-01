import React from "react";
import Link from "next/link";

import Block from "@components/block/Block";
import Column from "@components/column/Column";
import Button from "@components/button/Button";
import FormItem from "@components/form/FormItem";
import Checkbox from "@components/form/Checkbox";

import Arrow from "@icons/ui/arrow.js";

import s from "./Support.module.scss";

class VoteForm extends React.Component {
  state = { Component: null };

  selectYes = () => this.setState({ Component: VoteSend });
  selectNo = () => this.setState({ Component: VoteNo });

  render() {
    const { Component } = this.state;
    if (Component) return <Component />;
    return (
      <Block>
        <div className={s.vote__form}>
          <h6 className={s.title}>この回答はお役に立ちましたか？</h6>
          <Column button>
            <Button outline small onClick={this.selectYes}>はい</Button>
            <Button outline small onClick={this.selectNo}>いいえ</Button>
          </Column>
        </div>
      </Block>
    );
  }
}

export default VoteForm;

function VoteSend() {
  return (
    <Block>
      <div className={s.vote__form}>
        <h6 className={s.title}>ご回答頂きまして、ありがとうございます</h6>
        <p className={s.text}>ご回答頂いた意見を元に、サービスの開発を引き続き行っていきます。</p>
      </div>
    </Block>
  );
}

class VoteNo extends React.Component {
  state = { Component: null };
  selectSend = () => this.setState({ Component: VoteSend });
  render() {
    const { Component } = this.state;
    if (Component) return <Component />;
    return (
      <Block>
        <div className={s.vote__form}>
          <h6 className={s.title}>よろしければ、理由を教えていただけますか？</h6>
          <FormItem>
            <Checkbox
              text="内容が理解できなかった"
            />
            <Checkbox
              text="求めていた質問に対する回答が見つからなかった"
            />
            <Checkbox
              text="記述されている手順が間違っている"
            />
            <Checkbox
              text="情報が最新のものではなかった"
            />
            <Checkbox
              text="その他"
            />
          </FormItem>
          <FormItem>
            <Button outline  onClick={this.selectSend}>
              フィードバックを送る
            </Button>
          </FormItem>
        </div>
      </Block>
    );
  }
}
