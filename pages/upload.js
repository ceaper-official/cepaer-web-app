import React, { useState, useCallback } from "react";
import Link from "next/link";
import ReactCrop from "react-image-crop";

// upload (本来であれば、フルスクリーン: ページ上でclassNameに"full-screen"が存在していた場合、bodyにid"full-screen"を付けたい )
export default function Upload() {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({});

  const onSelectFile = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  }, []);

  const onLoad = useCallback((img) => {
    const aspect = 4 / 3;
    const width = img.width > img.height ? img.width / aspect : img.width;
    const height = img.height > img.width ? img.height / aspect : img.height;
    const x = img.width > img.height ? (img.width - width) / 2 : 0;
    const y = img.height > img.width ? (img.height - height) / 2 : 0;

    setCrop({
      unit: "px",
      width,
      height,
      x,
      y,
      aspect,
    });

    return false; // Return false if you set crop state in here.
  }, []);

  return (
    <div id="upload" className="full-screen">
      <header id="header">
        <div className="nav-container">
          <button className="button-ol">キャンセル</button>
          <div>
            <input type="file" accept="image/*" onChange={onSelectFile} />
          </div>
          <button className="button">続ける</button>
        </div>
      </header>
      <div className="contents">
        <section className="section">
          {src && (
            <ReactCrop
              src={src}
              crop={crop}
              keepSelection // 選択状態を保持
              ruleOfThirds // 縦横三等分の線を表示
              onChange={(newCrop) => setCrop(newCrop)}
              onImageLoaded={onLoad}
            />
          )}
        </section>
      </div>
      <style jsx>
        {`
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
        `}
      </style>
    </div>
  );
}
