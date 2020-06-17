import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import Link from "next/link";
import ReactCrop from "react-image-crop";

export default function FullScreenModal(props) {
  const [crop, setCrop] = useState({});

  useEffect(() => {
    const rootModal = document.getElementById("root-full-screen-modal");
    if (props.open) {
      document.body.style.overflow = "hidden";
      rootModal.style.display = "inline";
    } else {
      document.body.style.overflow = undefined;
      rootModal.style.display = "none";
    }
  }, [props.open]);

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

  if (!props.open) {
    return null;
  }

  return createPortal(
    <div id="full-screen-modal">
      <div className="container">
        <header id="header">
          <div className="nav-container">
            <button className="button-ol" onClick={props.onClose}>
              キャンセル
            </button>
            <button className="button" onClick={props.onContinue}>
              続ける
            </button>
          </div>
        </header>
        <div className="contents">
          <section className="section">
            {props.src && (
              <ReactCrop
                src={props.src}
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
          `}
        </style>
      </div>
    </div>,
    document.getElementById("root-full-screen-modal")
  );
}

FullScreenModal.propTypes = {
  open: PropTypes.bool,
  src: PropTypes.string,
  onClose: PropTypes.func,
  onContinue: PropTypes.func,
};
