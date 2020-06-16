import React from "react";
import Link from "next/link";
import Arrow from "../assets/icons/ui/arrow.js";

export default function Feedback() {
  return (
    <div className="contents">
      <div className="section">
        <div className="card card-wrapper" style={{ textAlign: "center" }}>
          <h5>サービスの機能改善・向上にご協力ください</h5>
          <div style={{ paddingTop: "2rem" }}>
            <Link href="/feedback">
              <a
                className="button button-snow ico-back"
                style={{ marginBottom: "1rem" }}
              >
                フィードバックを送る
                <Arrow />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
