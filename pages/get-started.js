import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import StepWizard from "react-step-wizard";
import GSBaseLayout from "../layouts/base-get-started.js";
import Upload from "../assets/icons/ui/upload.js";
import Human from "../assets/icons/ui/human.js";
import Add from "../assets/icons/ui/add.js";
import Arrow from "../assets/icons/ui/arrow.js";
import Circle from "../assets/icons/ui/gs-circle.js";
import Mail from "../assets/icons/ui/mail.js";
import Password from "../assets/icons/ui/password.js";
import { getCurrentUser, storage, db } from "../lib/firebase";
import generateRandomId from "../src/helpers/generateRandomId";
import withAuth from "../src/helpers/withAuth";

function User() {
  return <img src="images/default/user.jpg" alt="user image" />;
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

                <div className="gs-progress">
                  <span className="gs-progress-mark ico">
                    <Circle />
                  </span>
                  <span className="gs-progress-line" />
                  <h5 className="grey">ユーザー名の設定</h5>
                </div>

                <div className="gs-progress">
                  <span className="gs-progress-mark ico">
                    <Circle />
                  </span>
                  <span className="gs-progress-line" />
                  <h5 className="grey">アイコンの設定</h5>
                </div>

                <div className="gs-progress">
                  <span className="gs-progress-mark ico">
                    <Circle />
                  </span>
                  <h5 className="grey">完了</h5>
                </div>
              </div>
            </div>

            <div className="section gs-inner-form gs-inner">
              <div className="gs-inner-form">
                <div className="gs-inner-form-inner">
                  <StepWizard>
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
      <h1 className="title">プロフィールの設定</h1>
      <p>
        Cepaerを始める前に、あなたのプロフィールを完成させましょう。この項目は、後でも編集が可能です。
      </p>
      <label>ユーザー名</label>
      <div className="action-button-wrapper input-wrapper gs-input">
        <span className="input-prefix">
          <Human />
        </span>
        <input className="input-inner" placeholder="例：キーパー山田" />
      </div>
      <button
        className="button button-black gs-button button-w100 ico-back"
        onClick={props.nextStep}
      >
        次に進む
        <Arrow />
      </button>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }

  const [profileImageUrl, setProfileImageUrl] = useState("");
  const inputRef = useRef(null);

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

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setProfileImageUrl(reader.result);
      };

      // Firebase Storageへアップロード
      const user = getCurrentUser();
      const ref = storage.ref();
      const fileName = `${generateRandomId()}_original.jpg`;
      const snapshot = await ref
        .child(`images/profile/${user.uid}/${fileName}`)
        .put(file);

      // TODO: アップロード後に取得したprofileImageUrlをDBに保存する
      // const savedImageUrl = await snapshot.ref.getDownloadURL();
      // await db.collection("users").doc(user.id).update({
      //   image: savedImageUrl,
      // });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <h1 className="title">アイコンの設定</h1>
      <p>
        お気に入りのユニークなアイコンを設定しましょう！設定しない場合、デフォルトのアイコンが表示されます。
      </p>
      <input
        ref={inputRef}
        onChange={onChangeImage}
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

      <button
        className="button button-black gs-button button-w100 ico-back"
        onClick={props.nextStep}
      >
        次に進む
        <Arrow />
      </button>
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

      <button className="button button-accent gs-button button-w100">
        始める
      </button>
    </div>
  );
}
