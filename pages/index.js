import React from "react";
import Link from "next/link";
import BaseLayout from "../layouts/base.js";

class Home extends React.Component {
  render() {
    return (
      <BaseLayout>
        <div id="page">
          <div id="hero" className="bg-grey">
            <div className="section">
              <div className="hero-wrapper">
                <div className="hero-text-inner">
                  <div className="hero-text">
                    <h1>
                      Ceaperは、キャンプを愛する全ての人に向けた料理マネジメントサービスです。
                    </h1>
                    <p>
                      Ceaperは、キャンプを愛する人に向けた料理マネジメントサービスです。Ceaperは、キャンプを愛する人に向けた料理マネジメントサービスです。
                    </p>
                    <Link href="/signup">
                      <a className="button button-accent">アカウントを作成</a>
                    </Link>
                    <a className="button-text black" href="/signup">
                      使い方を学ぶ
                    </a>
                  </div>
                </div>
                <div className="hero-img-inner">
                  <img src="/images/home/hero.svg" alt="hero" />
                </div>
              </div>
            </div>
          </div>

          <div className="contents">
            <div className="section"></div>
          </div>
        </div>
      </BaseLayout>
    );
  }
}
export default Home;
