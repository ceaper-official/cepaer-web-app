import React from "react";
import BaseLayout from "../layouts/base.js";
import Link from "next/link";
import FeedBackColor from "../assets/icons/ui/feedback-color.js";
import BugColor from "../assets/icons/ui/bug-color.js";
import StarSolid from "../assets/icons/ui/star-solid.js";
import Rate5 from "../assets/icons/ui/rate5.js";
import Rate4 from "../assets/icons/ui/rate4.js";
import Rate3 from "../assets/icons/ui/rate3.js";
import Rate2 from "../assets/icons/ui/rate2.js";
import Rate1 from "../assets/icons/ui/rate1.js";

class FeedBackForm extends React.Component {
  state = { Component: null };

  render() {
    const { Component } = this.state;
    if (Component) return <Component />;
    return (
      <BaseLayout>
        <div id="page">
          <div className="contents bg-snow">
            <div className="section center-section">
              <h1 className="title">
                多種多彩なフィードバックをお待ちしております！
              </h1>
              <p className="">
                私達Ceaperは常にユーザーの方が心地良くサービスを使えるように新しい機能の開発・修正に挑んでいます。Ceaperのサービスを使用する中で、機能について不満に思った事や、ご要望などがございましたら、下記の質問に沿ってフィードバックを送信してください。
              </p>
              <p
                className=""
                style={{
                  marginBottom: 0,
                }}
              >
                なお、当ページはお問い合わせの窓口ではない為、原則ご返信は出来かねます。致命的な機能のバグ・不具合のご報告につきましては、ご返信と共に早急なご対応をいたします。また返答が必要な場合は、
                <a
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                  href="mailto: support@ceaper.com"
                  className=""
                >
                  サポート窓口
                </a>
                までお問い合わせください。
              </p>
            </div>
          </div>
          <div className="contents">
            <div className="section center-section">
              <div className="feedback-wrapper">
                <h5 className="hr-section-title">どのような内容ですか？</h5>
                <div className="form-select">
                  <a className="icon-button ico select-button select-button-bottom ico-big card">
                    <FeedBackColor />
                    フィードバックについて
                  </a>
                  <a className="icon-button ico select-button ico-big card">
                    <BugColor />
                    バグ・不具合について
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    );
  }
}
export default FeedBackForm;

function FeedBackStep2() {
  return (
    <div className="feedback-wrapper">
      <h5 className="hr-section-title">Ceaperのサービスに満足していますか？</h5>
      {/* ホバー で、選択。フォームにデータ出力 */}
      <div className="form-select">
        <div className=" select-rating-wrapper">
          <a className="select-button">
            <Rate1 />
            <span className="select-label xs-text">とても悪い</span>
          </a>
          <a className="select-button">
            <Rate2 />
            <span className="select-label xs-text">悪い</span>
          </a>
          <a className="select-button">
            <Rate3 />
            <span className="select-label xs-text">普通</span>
          </a>
          <a className="select-button">
            <Rate4 />
            <span className="select-label xs-text">良い</span>
          </a>
          <a className="select-button">
            <Rate5 />
            <span className="select-label xs-text">とても良い</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function FeedBackStep3() {
  return (
    <div className="feedback-wrapper">
      <h5 className="hr-section-title">内容を詳しくお話しください</h5>
      <div className="form-select">
        {/* 「どのような内容ですか？」の選択に応じて、placeholderの文を変更する */}
        <textarea
          className="feedback-area"
          placeholder="フィードバックについての場合：Ceaperのサービスを利用して感じた事、良かった点または、改善点などもお話しください。　バグ・不具合についての場合：どのような状況・操作で問題が発生しましたか？ 問題が発生した時の状況を詳しくお話しください。内容に応じて早急に対応させていただきます。"
        ></textarea>
      </div>
      <a className="button button-snow form-submit">フィードバックを送る</a>
    </div>
  );
}
