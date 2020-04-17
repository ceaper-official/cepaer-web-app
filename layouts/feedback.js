import React from "react";
import Link from 'next/link';
import  ArrowR from "../assets/icons/ui/arrow-r.js";

export default function Feedback() {
  return (
     <div className='contents'>
     <div className='section'>
    <div className="feedback-wrapper">
    <h5 className="hr-section-title">サービスの機能改善・向上にご協力ください</h5>
    <div className = "form-select">
    <Link href="/feedback"><a  className="button button-green ico-back">フィードバックを送る<ArrowR/></a></Link>
     </div>
     </div>
      </div>
     </div>
  );
}
