import React from 'react';
import GSBaseLayout from '../layouts/base-get-started.js'
import Link from 'next/link';
import Upload from "../assets/icons/ui/upload.js";
import Human from "../assets/icons/ui/human.js";
import Add from "../assets/icons/ui/add.js";
import ArrowR from "../assets/icons/ui/arrow-r.js";
import Circle from "../assets/icons/ui/gs-circle.js";
import StepWizard from 'react-step-wizard';
import Mail from "../assets/icons/ui/mail.js";
import Password from "../assets/icons/ui/password.js";

function User() {
  return <img src="images/default/user.jpg" alt="user image" />
}


class GS extends React.Component {
  render() {
    return (
  <GSBaseLayout>
  <div id="gs-page">

  <div className='gs-wrapper'>

  <div className='section gs-inner-nav gs-inner bg-grey'>
    <div className='gs-inner-nav-inner'>
<h6 className='title grey xs-text gs-progress'>プロフィールを設定しましょう</h6>

<div className="gs-progress">
  <span className="gs-progress-mark ico"><Circle/></span>
    <span className="gs-progress-line"></span>
    <h5 className="grey">ユーザー名の設定</h5>
</div>

<div className="gs-progress">
  <span className="gs-progress-mark ico"><Circle/></span>
    <span className="gs-progress-line"></span>
    <h5 className="grey">アイコンの設定</h5>
</div>

<div className="gs-progress">
  <span className="gs-progress-mark ico"><Circle/></span>
    <h5 className="grey">完了</h5>
</div>

</div>
</div>

  <div className='section gs-inner-form gs-inner'>
    <div className='gs-inner-form'>
      <div className='gs-inner-form-inner'>

            <StepWizard>
              <Step1 />
              <Step2 />
              <Step3 />
            </StepWizard>

</div>
</div>
</div>

<div className="gs-dots-nav">
  <span className="ico gs-dot"><Circle/></span>
    <span className="ico gs-dot"><Circle/></span>
      <span className="ico gs-dot"><Circle/></span>
</div>

 </div>

 </div>
</GSBaseLayout>
);
}
}
export default GS;


function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return(
<div>
<h1 className='title'>プロフィールの設定</h1>
<p>Cepaerを始める前に、あなたのプロフィールを完成させましょう。この項目は、後でも編集が可能です。</p>
<label>ユーザー名</label>
<div className="action-button-wrapper input-wrapper gs-input">
<span className="input-prefix">
<Human />
</span>
<input className="input-inner" placeholder="例：キーパー山田"></input>
</div>
<button  className="button button-accent gs-button button-w100 ico-back"onClick={props.nextStep}>次に進む<ArrowR/>
</button>
</div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return(
<div>
<h1 className='title'>アイコンの設定</h1>
<p>お気に入りのユニークなアイコンを設定しましょう！設定しない場合、デフォルトのアイコンが表示されます。</p>
  {/*アップロードされたら、.gs-uploadの中に、画像表示*/}
<div className="gs-upload-wrapper"style={{ justifyContent: "center" }}>
<div className="gs-upload">
  <div className="gs-upload-icon-wrapper">
<span className="gs-upload-icon">
<Add />
</span>
</div>
</div>
<button  className="button button-black-ol">画像を選択</button>
</div>


<button className="button button-accent gs-button button-w100 ico-back" onClick={props.nextStep}>次に進む<ArrowR/>
</button>
</div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return(
    <div>
    <h1 className='title'>Ceaperへようこそ！</h1>
    <p>プロフィールの設定が完了しました。ログインをして、早速Ceaperを始めましょう！</p>

    <div className="action-button-wrapper input-wrapper">
    <span className="input-prefix">
    <Mail />
    </span>
    <input className="input-inner" placeholder="Eメール"></input>
</div>
<div className="action-button-wrapper input-wrapper">
<span className="input-prefix">
<Password />
</span>
<input className="input-inner" placeholder="パスワード" type="password"></input>
<span className="input-suffix">
<Link href="/forgot-password">
    <a className="xs-text accent  hover-black">お忘れですか？</a>
</Link>
</span></div>

<button className="button button-green gs-button button-w100" >始める
</button>

    </div>
  );
}
