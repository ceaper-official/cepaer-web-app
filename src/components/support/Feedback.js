import React from "react";
import Link from "next/link";

import Block from "@components/block/Block";
import Card from "@components/card/Card";
import Button from "@components/button/Button";
import Container from "@components/container/Container";

import Arrow from "@icons/ui/arrow";

import s from "./Support.module.scss";

export default function Feedback() {
  return (
    <Block>
    <div className={s.feedback}>
    <Container>
    <Card>
      <h5 className={s.feedback__title}>サービスの機能改善・向上にご協力ください</h5>
      <div className={s.feedback__inner}>
        <Link href="/feedback">
        <a>
        <Button>
          フィードバックを送る
        </Button>
        </a>
        </Link>
      </div>
    </Card>
  </Container>
</div>
</Block>
  );
}
