import React from "react";
import Link from 'next/link';
import  ArrowR from "../assets/icons/ui/arrow-r.js";

export default function Feedback() {
  return (
     <div className='contents'>
     <div className='section'>
    <div className="card card-wrapper" style={{ textAlign: "center" }}>
    <h5>サービスの機能改善・向上にご協力ください</h5>
    <div style={{ paddingTop: "2rem" }}>
    <Link href="/feedback"><a  className="button button-accent ico-back" style={{ marginBottom: "1rem" }}>フィードバックを送る<ArrowR/></a></Link>
     </div>
     </div>
      </div>
     </div>
  );
}
