import BaseLayout from "../layouts/base.js";
import Link from "next/link";
import Feedback from "../layouts/feedback.js";

export default () => (
  <BaseLayout>
    <div id="page">
      {" "}
      <div className="contents">
        <div className="section center-section">
          <h1>このページは存在しません。</h1>
          <p>
            申し訳ありません。お探しのページは存在しないか、削除された可能性があります。入力したURLをチェックして、正しいページへアクセスしてください。
          </p>
        </div>
      </div>
      <Feedback />
    </div>
  </BaseLayout>
);
