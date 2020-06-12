import React from "react";
import Link from "next/link";

//upload (本来であれば、フルスクリーン: ページ上でclassNameに"full-screen"が存在していた場合、bodyにid"full-screen"を付けたい )
export default function Upload() {
  return (
    <div id="upload" className="full-screen">
      <header id="header">
        <div className="nav-container">
          <button className="button-ol">キャンセル</button>
          <button className="button">続ける</button>
        </div>
      </header>
      <div className="contents">
        <section className="section">{/* ここに画像 */}</section>
      </div>
      <style jsx>{`
        .nav-container {
          display: flex;
          justify-content: space-between;
        }
        #header {
          display: block;
        }
        #__next {
          width: 100%;
          position: fixed;
          overflow: hidden;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
