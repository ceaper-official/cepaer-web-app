import Link from "next/link";

import BaseLayout from '@components/layout/BaseLayout';
import HeroText from "@components/hero/HeroText";
import Feedback from "@components/support/Feedback";

export default () => (
  <BaseLayout>
    <HeroText title="このページは存在しません。">
      <p>
      申し訳ありません。お探しのページは存在しないか、削除された可能性があります。入力したURLをチェックして、正しいページへアクセスしてください。
      </p>
    </HeroText>

      <Feedback />
  </BaseLayout>
);
