import React from "react";
import Link from "next/link";

import BaseLayout from "@components/layout/BaseLayout";
import Block from "@components/block/Block";
import Container from "@components/container/Container";
import Column from "@components/column/Column";
import Feedback from "@components/support/Feedback";
import HeroText from "@components/hero/HeroText";
import Card from "@components/card/Card";
import ArrowButton from "@components/button/ArrowButton";

import Search from "@icons/ui/search.js";
import Arrow from "@icons/ui/arrow.js";

export default () => (
  <BaseLayout>
    <HeroText title="よくある質問">
    </HeroText>
    <Block>
      <Container>
        <Column col2>
          <Card>
            <h3>Ceaperについて</h3>
            <ArrowButton text="Ceaperとは" to=""/>
            <ArrowButton text="使い方" to=""/>
          </Card>
          <Card>
            <h3>アカウント</h3>
            <ArrowButton text="アカウントの作成" to=""/>
            <ArrowButton text="アカウントの管理" to=""/>
            <ArrowButton text="アカウントの削除" to=""/>
          </Card>
      </Column>
      </Container>
    </Block>
    <Feedback />
  </BaseLayout>
);
