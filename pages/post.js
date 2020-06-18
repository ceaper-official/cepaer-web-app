import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useDropzone } from "react-dropzone";
import LogoDark from "../assets/logo-dark.js";
import Upload from "../assets/icons/ui/upload.js";
import Add from "../assets/icons/ui/add.js";
import { storage } from "../lib/firebase";
import generateRandomId from "../src/helpers/generateRandomId";
import getImageFileType from "../src/helpers/getImageFileType";
import withAuth from "../src/helpers/withAuth";
import FullScreenModal from "../layouts/full-screen-modal.js";

const Post = () => {
  const [modalProps, setModalProps] = useState({
    open: false,
    src: null,
    fileType: null,
  });
  const [previewImageUrl, setPreviewImage] = useState(null);

  // モーダルを閉じる
  const onCloseModal = useCallback(() => {
    setModalProps({
      open: false,
      src: null,
      fileType: null,
    });
  });

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    // 許可されていないファイル形式の場合
    if (!file) {
      // eslint-disable-next-line no-alert
      alert("許可されていないファイル形式です");
      return;
    }

    // crop用modalに画像をセット
    setModalProps({
      open: true,
      src: URL.createObjectURL(file),
      fileType: file.type,
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
    multiple: false,
  });

  // アップロード実行
  const onUpload = useCallback(async (blob) => {
    try {
      // 事前にpreview用の画像URLを表示
      setPreviewImage(URL.createObjectURL(blob));

      const fileType = getImageFileType(modalProps.fileType);
      if (!fileType) {
        return;
      }

      // モーダルを閉じる
      onCloseModal();

      // TODO: 投稿IDをFirebaseから生成
      const postId = "aaaa";

      // Firebase Storageへアップロード
      const ref = storage.ref();
      const fileName = `${generateRandomId()}_original.${fileType.ext}`;
      const snapshot = await ref
        .child(`images/post/${postId}/${fileName}`)
        .put(blob);

      // アップロードした画像URLをダウンロード & ダウンロードした画像をPreviewにセット
      const imageUrl = await snapshot.ref.getDownloadURL();
      setPreviewImage(imageUrl);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div
      id="page"
      style={{
        marginTop: 0,
      }}
    >
      <header id="header" className="bg-black">
        <div>
          <div className="nav-container">
            <Link href="/">
              <a className="logo-link">
                <LogoDark />
              </a>
            </Link>
          </div>
        </div>
      </header>
      <FullScreenModal
        {...modalProps}
        aspect={4 / 3}
        onClose={onCloseModal}
        onContinue={(blob) => onUpload(blob)}
      />
      <div className="contents post-row">
        <div className="section post-main">
          <div className="drop-area-hero" {...getRootProps()}>
            <input {...getInputProps()} />
            {previewImageUrl ? (
              <img className="preview-image" src={previewImageUrl} />
            ) : (
              <div className="ico">
                <div>
                  <Upload />
                  <h3>ドラッグ&ドロップやクリックで料理写真を追加</h3>
                  <p className="xs-text">データ形式：JPG, PNG</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="section post-details">
          <fieldset className="post-field">
            <label>レシピ名</label>
            <input type="text" className="post-content" />
          </fieldset>

          <div className="post-field-2col">
            <fieldset className="post-field">
              <label>調理時間（分）</label>
              <input type="text" placeholder="15" className="post-content" />
            </fieldset>
            <fieldset className="post-field">
              <label>人数（人）</label>
              <input type="text" placeholder="2" className="post-content" />
            </fieldset>
          </div>

          <fieldset className="post-field">
            <label>レシピについて</label>
            <textarea
              placeholder="レシピについての説明、キャッチフレーズをお書きください。"
              className="post-content"
            />
          </fieldset>

          {/* 1. 入力すると、検索機能のように下に予測文字が表示され、該当の文字をクリックすると、labelに追加される */}
          <fieldset className="post-field">
            <label>使ったキャンプ道具</label>
            <input type="text" className="post-content" />
          </fieldset>
          {/* 1. 使用されている順で、10個表示。 2.クリックしたら、上のフォームに追加 */}
          <fieldset className="post-field">
            <p className="xs-text post-tag-label">人気のキャンプ道具</p>
            <div className="post-content">
              <span className="tag post-tag">タグ</span>
              <span className="tag post-tag">タグ</span>
              <span className="tag post-tag">タグ</span>
              <span className="tag post-tag">タグ</span>
              <span className="tag post-tag">タグ</span>
              <span className="tag post-tag">タグ</span>
              <span className="tag post-tag">タグ</span>
              <span className="tag post-tag">タグ</span>
              <span className="tag post-tag">タグ</span>
              <span className="tag post-tag">タグ</span>
            </div>
          </fieldset>

          <div className="post-ingredients">
            <div className="post-field-2col post-ingredient">
              <fieldset className="post-field">
                <label>材料</label>
                <input
                  type="text"
                  placeholder="豚バラ肉"
                  className="post-content"
                />
              </fieldset>
              <fieldset className="post-field">
                <label>分量</label>
                <input
                  type="text"
                  placeholder="200g"
                  className="post-content"
                />
              </fieldset>
            </div>
            <div className="post-field-2col post-ingredient">
              <fieldset className="post-field">
                <input
                  type="text"
                  placeholder="にんじん"
                  className="post-content"
                />
              </fieldset>
              <fieldset className="post-field">
                <input type="text" placeholder="1/2" className="post-content" />
              </fieldset>
            </div>
            <div className="post-field-2col post-ingredient">
              <fieldset className="post-field">
                <input
                  type="text"
                  placeholder="みりん"
                  className="post-content"
                />
              </fieldset>
              <fieldset className="post-field">
                <input
                  type="text"
                  placeholder="大さじ2"
                  className="post-content"
                />
              </fieldset>
            </div>
          </div>

          <fieldset className="post-field">
            <a className="icon-button button-text ico accent making-button post-content">
              <Add />
              材料を追加{" "}
            </a>
          </fieldset>

          <fieldset className="post-field">
            <label>作り方</label>
            <div className="post-making">
              <div className="post-making-item">
                <textarea placeholder="" className="post-content" />
              </div>
              <div className="post-making-item">
                <textarea placeholder="" className="post-content" />
              </div>
            </div>
            <a className="icon-button button-text ico accent making-button post-content">
              <Add />
              作り方を追加
            </a>
          </fieldset>
        </div>
      </div>

      <nav id="post-nav" className="bg-white">
        <div className="section">
          <div className="nav-container">
            {/* 直前のページに戻る */}
            <button className="button-ol">キャンセル</button>
            <button className="button">レシピを投稿する</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withAuth(Post);
