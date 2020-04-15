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

export default () => (
  <GSBaseLayout>
  <div id="gs-page">

  <div class='gs-wrapper'>

  <div class='section gs-inner-nav gs-inner bg-grey'>
    <div class='gs-inner-nav-inner'>
<h6 class='title grey xs-text gs-progress'>プロフィールを設定しましょう</h6>

<div class="gs-progress">
  <span class="gs-progress-mark ico"><Circle/></span>
    <span class="gs-progress-line"></span>
    <h5 class="grey">ユーザー名の設定</h5>
</div>

<div class="gs-progress">
  <span class="gs-progress-mark ico"><Circle/></span>
    <span class="gs-progress-line"></span>
    <h5 class="grey">アイコンの設定</h5>
</div>

<div class="gs-progress">
  <span class="gs-progress-mark ico"><Circle/></span>
    <h5 class="grey">完了</h5>
</div>

</div>
</div>

  <div class='section gs-inner-form gs-inner'>
    <div class='gs-inner-form'>
      <div class='gs-inner-form-inner'>

            <StepWizard>
              <Step1 />
              <Step2 />
              <Step3 />
            </StepWizard>

</div>
</div>
</div>

<div class="gs-dots-nav">
  <span class="ico gs-dot"><Circle/></span>
    <span class="ico gs-dot"><Circle/></span>
      <span class="ico gs-dot"><Circle/></span>
</div>

 </div>

 </div>
</GSBaseLayout>
)


function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return(
<div>
<h1 class='title'>プロフィールの設定</h1>
<p>Cepaerを始める前に、あなたのプロフィールを完成させましょう。この項目は、後でも編集が可能です。</p>
<label>ユーザー名</label>
<div class="action-button-wrapper input-wrapper gs-input">
<span class="input-prefix">
<Human />
</span>
<input class="input-inner" placeholder="例：キーパー山田"></input>
</div>
<button class="button button-accent gs-button button-w100 ico-back" >次に進む<ArrowR/>
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
<h1 class='title'>アイコンの設定</h1>
<p>お気に入りのユニークなアイコンを設定しましょう！設定しない場合、デフォルトのアイコンが表示されます。</p>
  {/*アップロードされたら、.gs-uploadの中に、画像表示*/}
<div class="gs-upload-wrapper">
<div class="gs-upload">
  <div class="gs-upload-icon-wrapper">
<span class="gs-upload-icon">
<Add />
</span>
</div>
</div>
<button  class="button button-black-ol">画像を選択</button>
</div>


<button class="button button-accent gs-button button-w100 ico-back" >次に進む<ArrowR/>
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
    <h1 class='title'>Ceaperへようこそ！</h1>
    <p>プロフィールの設定が完了しました。ログインをして、早速Ceaperを始めましょう！</p>

    <div class="action-button-wrapper input-wrapper">
    <span class="input-prefix">
    <Mail />
    </span>
    <input class="input-inner" placeholder="Eメール"></input>
</div>
<div class="action-button-wrapper input-wrapper">
<span class="input-prefix">
<Password />
</span>
<input class="input-inner" placeholder="パスワード" type="password"></input>
<span class="input-suffix">
<Link href="/forgot-password">
    <a class="xs-text accent  hover-black">お忘れですか？</a>
</Link>
</span></div>

<button class="button button-green gs-button button-w100" >始める
</button>

    </div>
  );
}
