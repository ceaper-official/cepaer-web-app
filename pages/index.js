import React from 'react';
import Link from 'next/link';
import { auth, firebase } from '../src/firebase';
import Head from 'next/head'

class Home extends React.Component {
// ここから下を追加
  handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    auth
      .signInWithPopup(provider)
      .then(() => {
        alert('You are signed In');
      })
      .catch(err => {
        alert('OOps something went wrong check your console');
        console.log(err);
      });
  };
  handleSignout = () => {
    auth
      .signOut()
      .then(function() {
        alert('Logout successful');
      })
      .catch(function(error) {
        alert('OOps something went wrong check your console');
        console.log(err);
      });
  };
// ここまでを追加
  render() {
    return (
        <div>

        <div id="hero">
          <div class="section">
            <div class="hero-wrapper">
              <div class="hero-text-inner">
                <div class="hero-text">
                              <h1>Ceaperは、キャンプを愛する全ての人に向けた料理マネジメントサービスです。</h1>
                              <p>Ceaperは、キャンプを愛する人に向けた料理マネジメントサービスです。Ceaperは、キャンプを愛する人に向けた料理マネジメントサービスです。</p>
                        <a class="button button-accent" href="/signup">アカウントを作成</a>
                        <a class="button-text" href="/signup">使い方を学ぶ</a>
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

    );
  }
}
export default Home;
