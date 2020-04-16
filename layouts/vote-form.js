import React from "react";
import Link from 'next/link';
import  ArrowR from "../assets/icons/ui/arrow-r.js";



class VoteForm extends React.Component {
  state = { Component: null }

  selectYes = () => this.setState({Component: VoteYes})
  selectNo = () => this.setState({Component: VoteNo})

  render() {
    const {Component} = this.state;
    if(Component) return <Component />;
  return (
     <div className='contents'>

    <div id="vote-wrapper" className="card card-wrapper">
    <h5>この回答はお役に立ちましたか？</h5>
      <div className="button-choice-wrapper">
        <Link href="/edit">
          <button  className="button button-black-ol button-choice-l "onClick={this.selectYes}>はい
        </button></Link>

      <button  className="button  button-black-ol button-choice-r"onClick={this.selectNo}>いいえ
      </button>
        </div>
     </div>

     </div>
  );
}
}
export default VoteForm;


function VoteYes() {
  return(
       <div className='contents'>
      <div id="vote-wrapper" className="card card-wrapper">
      <h5>ありがとうございました！</h5>
       </div>
       </div>
  );
}


function VoteNo() {
  return(
       <div className='contents'>
      <div id="vote-wrapper" className="card card-wrapper">
        <h5>理由を教えていただけますか？</h5>
                 </div>
       </div>
  );
}
