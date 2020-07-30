import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import StepWizard from "react-step-wizard";

import { getCurrentUser, storage, db } from "../lib/firebase";
import withAuth from "@src/helpers/withAuth";
import generateRandomId from "@src/helpers/generateRandomId";
import acceptImageFileType from "@src/helpers/acceptImageFileType";

import GSBaseLayout from "../layouts/base-get-started.js";
import FullScreenModal from "../layouts/full-screen-modal.js";

import Upload from "@icons/ui/upload.js";
import Human from "@icons/ui/human.js";
import Add from "@icons/ui/add.js";
import Arrow from "@icons/ui/arrow.js";
import Circle from "@icons/ui/gs-circle.js";
import Mail from "@icons/ui/mail.js";
import Password from "@icons/ui/password.js";

function User() {
  return <img src="images/default/user.jpg" alt="user image" />;
}

function GSNav() {
  return (
    <div>
      <div className="gs-progress active" id="gs-nav1">
        <span className="gs-progress-mark ico">
          <Circle />
        </span>
        <h5 className="grey">ユーザー名の設定</h5>
      </div>

      <div className="gs-progress" id="gs-nav2">
        <span className="gs-progress-mark ico">
          <Circle />
        </span>
        <span className="gs-progress-line" />
        <h5 className="grey">アイコンの設定</h5>
      </div>

      <div className="gs-progress" id="gs-nav3">
        <span className="gs-progress-mark ico">
          <Circle />
        </span>
        <span className="gs-progress-line" />
        <h5 className="grey">Ceaperへようこそ！</h5>
      </div>
    </div>
  );
}

class GS extends React.Component {
  render() {
    return (
      <GSBaseLayout>
        <div id="gs-page">
          <div className="gs-wrapper">
            <div className="section gs-inner-nav gs-inner bg-snow">
              <div className="gs-inner-nav-inner">
                <h6 className="title grey xs-text gs-progress">
                  プロフィールを設定しましょう
                </h6>

                <StepWizard nav={<GSNav />} />
              </div>
            </div>

            <div className="section gs-inner-form gs-inner">
              <div className="gs-inner-form">
                <div className="gs-inner-form-inner">
                  <StepWizard isHashEnabled>
                    <Step1 />
                    <Step2 />
                    <Step3 />
                  </StepWizard>
                </div>
              </div>
            </div>

            <div className="gs-dots-nav">
              <span className="ico gs-dot">
                <Circle />
              </span>
              <span className="ico gs-dot">
                <Circle />
              </span>
              <span className="ico gs-dot">
                <Circle />
              </span>
            </div>
          </div>
        </div>
      </GSBaseLayout>
    );
  }
}
export default withAuth(GS);

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div>
      <h1 className="title">ユーザー名の設定</h1>
      <p>Cepaerを始める前に、あなたのプロフィールを完成させましょう。</p>
      <div className="action-button-wrapper input-wrapper gs-input">
        <span className="input-prefix">
          <Human />
        </span>
        <input className="input-inner" placeholder="例：キーパー山田" />
      </div>
      <button className="button button-w100" onClick={props.nextStep} id="gs1">
        次に進む
      </button>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }

  const [modalProps, setModalProps] = useState({
    open: false,
    src: null,
    fileType: null,
  });
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const inputRef = useRef(null);

  // モーダルを閉じる
  const onCloseModal = useCallback(() => {
    setModalProps({
      open: false,
      src: null,
      fileType: null,
    });
  });

  const onClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, [inputRef]);

  const onChangeImage = useCallback(async (event) => {
    if (event.target.files === null) {
      return;
    }
    const file = event.target.files.item(0);
    if (file === null) {
      return;
    }

    // crop用modalに画像をセット
    setModalProps({
      open: true,
      src: URL.createObjectURL(file),
      fileType: file.type,
    });
  }, []);

  const onUpload = useCallback(async (blob) => {
    try {
      // 事前にpreview用の画像URLを表示する
      setProfileImageUrl(URL.createObjectURL(blob));

      // モーダルを閉じる
      onCloseModal();

      // Firebase Storageへアップロード
      const user = getCurrentUser();
      const ref = storage.ref();
      const fileName = `${generateRandomId()}.jpg`;
      const snapshot = await ref
        .child(`images/profile/${user.uid}/${fileName}`)
        .put(blob);

      // TODO: アップロード後に取得したprofileImageUrlをDBに保存する
      const savedImageUrl = await snapshot.ref.getDownloadURL();
      await db.collection("users").doc(user.id).update({
        image: savedImageUrl,
      });
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div>
      <FullScreenModal
        {...modalProps}
        aspect={1}
        onClose={onCloseModal}
        onContinue={(blob) => onUpload(blob)}
      />
      <h1 className="title">アイコンの設定</h1>
      <p>
        お気に入りのユニークなアイコンを設定しましょう！設定しない場合、デフォルトのアイコンが表示されます。
      </p>
      <input
        ref={inputRef}
        onChange={onChangeImage}
        accept={acceptImageFileType}
        style={{ display: "none" }}
        type="file"
      />
      {/* アップロードされたら、.gs-uploadの中に、画像表示 */}
      <div className="gs-upload-wrapper" style={{ justifyContent: "center" }}>
        <div className={`gs-upload ${profileImageUrl && "gs-uploaded"}`}>
          {profileImageUrl ? (
            <img
              className="gs-uploaded-image"
              src={profileImageUrl}
              alt="profile"
            />
          ) : (
            <div className="gs-upload-icon-wrapper" onClick={onClick}>
              <span className="gs-upload-icon">
                <Add />
              </span>
            </div>
          )}
        </div>
        <button className="button button-black-ol" onClick={onClick}>
          画像を選択
        </button>
      </div>

      <div className="button-choice-wrapper">
        <button
          className="button-ol button-choice-l"
          onClick={props.previousStep}
        >
          前に戻る
        </button>
        <button
          className="button button-choice-r"
          onClick={props.nextStep}
          id="gs2"
        >
          次に進む
        </button>
      </div>
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div>
      <h1 className="title">Ceaperへようこそ！</h1>
      <p>
        プロフィールの設定が完了しました。ログインをして、早速Ceaperを始めましょう！
      </p>

      <div className="action-button-wrapper input-wrapper">
        <span className="input-prefix">
          <Mail />
        </span>
        <input className="input-inner" placeholder="Eメール" />
      </div>
      <div className="action-button-wrapper input-wrapper">
        <span className="input-prefix">
          <Password />
        </span>
        <input
          className="input-inner"
          placeholder="パスワード"
          type="password"
        />
        <span className="input-suffix">
          <Link href="/forgot-password">
            <a className="xs-text support  hover-black">お忘れですか？</a>
          </Link>
        </span>
      </div>

      <div className="button-choice-wrapper">
        <button
          className="button-ol button-choice-l"
          onClick={props.previousStep}
        >
          前に戻る
        </button>
        <Link href="/">
          <button className="button button-choice-r" onClick={props.nextStep}>
            始める{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
