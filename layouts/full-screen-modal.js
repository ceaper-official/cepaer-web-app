import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import ReactCrop from "react-image-crop";

export default function FullScreenModal(props) {
  const [crop, setCrop] = useState({});
  const [imageRef, setImageRef] = useState(null);
  const [croppedImageBlob, setCroppedImageBlob] = useState(null);

  useEffect(() => {
    const rootModal = document.getElementById("root-full-screen-modal");
    if (props.open) {
      document.body.style.overflow = "hidden";
      rootModal.style.display = "inline";
    } else {
      document.body.style.overflow = "visible";
      rootModal.style.display = "none";
    }
  }, [props.open]);

  // Croppingした画像のBlobを変更
  const getCroppedImg = useCallback(
    (image, crop) => {
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      // blob形式に変換
      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          resolve(blob);
        }, props.fileType);
      });
    },
    [props.fileType]
  );

  const onLoad = useCallback(
    (img) => {
      const { aspect } = props;

      setImageRef(img);

      let { width, height } = img;
      console.log(width);
      console.log(height);
      if (img.width > img.height) {
        width = img.height * aspect;
      } else {
        height = img.width / aspect;
      }
      console.log(width);
      console.log(height);

      const x = img.width >= img.height ? (img.width - width) / 2 : 0;
      const y = img.height >= img.width ? (img.height - height) / 2 : 0;
      // eslint-disable-next-line no-shadow
      const crop = {
        unit: "px",
        width,
        height,
        x,
        y,
        aspect,
      };
      setCrop(crop);

      getCroppedImg(img, crop).then((blob) => {
        setCroppedImageBlob(blob);
      });

      return false;
    },
    [props.aspect]
  );

  const onCompleteCrop = async () => {
    if (imageRef && crop.width && crop.height) {
      const blob = await getCroppedImg(imageRef, crop);
      setCroppedImageBlob(blob);
    }
  };

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
            <button
              className="button"
              onClick={() => props.onContinue(croppedImageBlob)}
            >
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
                onComplete={onCompleteCrop}
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
  aspect: PropTypes.number,
  fileType: PropTypes.string,
  onClose: PropTypes.func,
  onContinue: PropTypes.func,
};

FullScreenModal.defaultProps = {
  fileType: "image/jpeg",
  aspect: 1,
};
