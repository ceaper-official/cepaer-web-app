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
          <button  className="button button-green-ol button-choice-l "onClick={this.selectYes}>はい
        </button></Link>

      <button  className="button  button-green-ol button-choice-r"onClick={this.selectNo}>いいえ
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
      <h5>フィードバックをお寄せ頂き、ありがとうございます！</h5>
       </div>
       </div>
  );
}

class VoteNo extends React.Component {
  state = { Component: null }
  selectSubmit = () => this.setState({Component: VoteSubmit})
  render() {
    const {Component} = this.state;
    if(Component) return <Component />;
  return (
    <div className='contents'>
   <div id="vote-wrapper" className="card card-wrapper"style={{ textAlign: "left" }}>
     <h5>よろしければ、理由を教えていただけますか？</h5>

<label class="answer-label"><input type="checkbox"/><span>内容が理解できない、読みにくかった</span></label>
 <label class="answer-label"><input type="checkbox"/><span>自分の質問に対する回答が見つからなかった</span></label>
     <label class="answer-label"><input type="checkbox"/><span>その他</span></label>
       <div className = "form-select">
       <textarea className="feedback-area" placeholder="他に原因はありますか？"></textarea>
        </div>
        <div className="vote-submit"><button className="button button-green"onClick={this.selectSubmit}>フィードバックを送る
        </button></div>
              </div>
    </div>
  );
}
}


function VoteSubmit() {
  return(
       <div className='contents'>
      <div id="vote-wrapper" className="card card-wrapper">
      <h5>フィードバックをお寄せ頂き、ありがとうございます！</h5>
       </div>
       </div>
  );
}
