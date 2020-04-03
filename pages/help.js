import BaseLayout from '../layouts/base.js';
import Link from 'next/link';
import Search from "../assets/icons/ui/search.js";
import  Bug from "../assets/icons/ui/bug.js";
import  HumanAccent from "../assets/icons/ui/human-accent.js";
import  FlagAccent from "../assets/icons/ui/flag-accent.js";
import   PasswordAccent from "../assets/icons/ui/password-accent.js";
import  ArrowR from "../assets/icons/ui/arrow-r.js";


export default () => (
  <BaseLayout>
  <div id="page">

  <div class='contents'>
  <div class='section center-section'>
<div class="search-wrapper help-search">
<span class="search-icon"><span class="search-icon-inner"><Search /></span></span>
<input class="search" type="search" name="q" placeholder="お困りのキーワードで検索..."/>
</div>
</div>
 </div>

 <div class='contents'>
 <div class='section'>
<div class="help-cat-wrapper">

<div class="help-cat-inner card">
<div class="help-cat-inner-l">
<FlagAccent/>
</div>
<div class="help-cat-inner-r">
<h3>Ceaperについて</h3>
<div class="help-cat-link-wrapper">
<Link href="/"><a class="hover-line help-cat-link ico-back xs-text xs-icon">Ceaperとは？<ArrowR/></a></Link>
<Link href="/"><a class="hover-line help-cat-link ico-back xs-text xs-icon">使い方<ArrowR/></a></Link>
<Link href="/"><a class="hover-line help-cat-link ico-back xs-text xs-icon">ランキングの基準<ArrowR/></a></Link>
</div>
</div>
</div>

<div class="help-cat-inner card">
<div class="help-cat-inner-l">
<HumanAccent/>
</div>
<div class="help-cat-inner-r">
<h3>アカウント</h3>
<div class="help-cat-link-wrapper">
<Link href="/"><a class="hover-line help-cat-link ico-back xs-text xs-icon">アカウントの作成<ArrowR/></a></Link>
</div>
</div>
</div>

<div class="help-cat-inner card">
<div class="help-cat-inner-l">
< PasswordAccent/>
</div>
<div class="help-cat-inner-r">
<h3>規約・個人情報の扱い</h3>
<div class="help-cat-link-wrapper">
<Link href="/"><a class="hover-line help-cat-link ico-back xs-text xs-icon">アカウントの作成<ArrowR/></a></Link>
</div>
</div>
</div>


</div>
</div>
</div>


 <div class='contents'>
 <div class='section'>
<div class="feedback-wrapper">
<h5 class="hr-section-title">サービスの機能改善・向上にご協力ください</h5>
<div class = "form-select">
<Link href="/feedback"><a  class="button button-accent ico-back">フィードバックを送る<ArrowR/></a></Link>
 </div>
 </div>
  </div>
 </div>




 </div>
</BaseLayout>
)
