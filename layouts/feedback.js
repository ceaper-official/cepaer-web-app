import React from "react";
import Link from 'next/link';
import  ArrowR from "../assets/icons/ui/arrow-r.js";

export default function Feedback() {
  return (
     <div class='contents'>
     <div class='section'>
    <div class="feedback-wrapper">
    <h5 class="hr-section-title">サービスの機能改善・向上にご協力ください</h5>
    <div class = "form-select">
    <Link href="/feedback"><a  class="button button-black ico-back">フィードバックを送る<ArrowR/></a></Link>
     </div>
     </div>
      </div>
     </div>
  );
}
