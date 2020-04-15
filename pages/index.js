import React from 'react';
import Link from 'next/link';
import HomeBaseLayout from '../layouts/base-home.js'

class Home extends React.Component {
  render() {
    return (
      <HomeBaseLayout>
        <div id="page">

        <div id="hero" class="bg-grey">
          <div class="section">
            <div class="hero-wrapper">
              <div class="hero-text-inner">
                <div class="hero-text">
                              <h1>Ceaperは、キャンプを愛する全ての人に向けた料理マネジメントサービスです。</h1>
                              <p>Ceaperは、キャンプを愛する人に向けた料理マネジメントサービスです。Ceaperは、キャンプを愛する人に向けた料理マネジメントサービスです。</p>
                                <Link href="/signup">
                                  <a class="button button-accent">アカウントを作成</a>
                                </Link>
                        <a class="button-text black" href="/signup">使い方を学ぶ</a>
                      </div>
              </div>
              <div class="hero-img-inner">
                <img src="/images/home/hero.svg"  alt="hero"/>
              </div>
        </div>
        </div>
        </div>

        <div class='contents'>
        <div class='section'>



        </div>
        </div>




        </div>
      </HomeBaseLayout>
    );
  }
}
export default Home;
