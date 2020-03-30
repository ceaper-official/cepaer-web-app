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
        <Head title='Home' />
        <div class='hero'>
          <h1 class='title'>
            Ceaperのホーム画面です
          </h1>
          <p class='description'>
            Click on the Dashboard link to visit the dashboard page.
          </p>
          <div class='row'>
            <Link href='/dashboard'>
              <a class='button'>
                <h3>Go to Dashboard&rarr;</h3>
                <p>Visit Dashboard</p>
              </a>
            </Link>
　　　{/* ここから下2行を追加 */}
            <button onClick={this.handleSignIn}>Sign In using google</button>
            <button onClick={this.handleSignout}>Signout</button>
          </div>
        </div>
        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 4.8rem;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    );
  }
}
export default Home;
