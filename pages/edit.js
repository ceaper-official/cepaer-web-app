import React from "react";
import BaseLayout from "../layouts/base.js";
import Link from "next/link";
import Add from "../assets/icons/ui/add.js";
import SettingSolid from "../assets/icons/ui/setting_solid.js";
import Upload from "../assets/icons/ui/upload.js";
import Cross from "../assets/icons/ui/cross.js";
import Instagram from "../assets/icons/social/instagram.js";
import Twitter from "../assets/icons/social/twitter.js";
import Google from "../assets/icons/social/google.js";
import Facebook from "../assets/icons/social/facebook.js";
import NavEdit from "../layouts/nav-edit.js";
import NavEditMobile from "../layouts/nav-edit-mobile.js";
import { getCurrentUser, storage, db } from "../lib/firebase";
import withAuth from "../src/helpers/withAuth";
import generateRandomId from "../src/helpers/generateRandomId";
import acceptImageFileType from "../src/helpers/acceptImageFileType";
import FullScreenModal from "../layouts/full-screen-modal.js";

function User({ imageUrl }) {
  return <img src={imageUrl || "/images/default/user.svg"} alt="user image" />;
}

/* 入力された文・値は保存 */
export class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      profileImageUrl: "",
      modalProps: {
        open: false,
        src: null,
        fileType: null,
      },
    };
  }

  async componentDidMount() {
    // TODO: Firestoreからユーザ情報を取得
    // try {
    //   const user = getCurrentUser();
    //   const userDoc = await db.collection("users").doc(user.uid).get();
    //   console.log(userDoc);
    //   this.setState({
    //     profileImageUrl: userDoc.data.image,
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  }

  onCloseModal = () => {
    this.setState({
      modalProps: {
        open: false,
        src: null,
        fileType: null,
      },
    });
  };

  onClickProfileImage = () => {
    if (this.inputRef.current) {
      this.inputRef.current.click();
    }
  };

  onChangeProfileImage = async (event) => {
    if (event.target.files === null) {
      return;
    }
    const file = event.target.files.item(0);
    if (file === null) {
      return;
    }

    // crop用modalに画像をセット
    this.setState({
      modalProps: {
        open: true,
        src: URL.createObjectURL(file),
        fileType: file.type,
      },
    });
  };

  onUpload = async (blob) => {
    try {
      // 事前にpreview用の画像URLを表示
      this.setState({
        profileImageUrl: URL.createObjectURL(blob),
      });

      // モーダルを閉じる
      this.onCloseModal();

      // Firebase Storageへアップロード
      const user = getCurrentUser();
      const ref = storage.ref();
      const fileName = `${generateRandomId()}.jpg`;
      const snapshot = await ref
        .child(`images/profile/${user.uid}/${fileName}`)
        .put(blob);

      // TODO: アップロード後に取得したprofileImageUrlをDBに保存する
      // const savedImageUrl = await snapshot.ref.getDownloadURL();
      // await db.collection("users").doc(user.id).update({
      //   image: savedImageUrl,
      // });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <BaseLayout>
        <FullScreenModal
          open={this.state.modalProps.open}
          src={this.state.modalProps.src}
          fileType={this.state.modalProps.fileType}
          aspect={1}
          onClose={this.onCloseModal}
          onContinue={this.onUpload}
        />
        <div id="page" className="side-nav-page">
          <div className="user-row edit-row">
            <div className="contents">
              <div className="section edit-wrapper center-section">
                <NavEdit />
                <NavEditMobile />

                <div className="edit-inner">
                  {/* 項目・プロフィール */}
                  <div className="edit-section" id="profile">
                    <div className="user-container">
                      <h3 className="edit-section-title section-title edit-item">
                        プロフィール
                      </h3>
                      <input
                        ref={this.inputRef}
                        accept={acceptImageFileType}
                        onChange={this.onChangeProfileImage}
                        style={{ display: "none" }}
                        type="file"
                      />
                      <div className="edit-item edit-user-icon-wrapper">
                        <div
                          className="edit-user-icon"
                          onClick={this.onClickProfileImage}
                        >
                          <User imageUrl={this.state.profileImageUrl} />
                        </div>
                        <div className="edit-user-button-wrapper">
                          <button
                            className="button button-black ico"
                            onClick={this.onClickProfileImage}
                          >
                            <Upload />
                            アイコンをアップロード
                          </button>
                          <button className="button button-cancel ico">
                            削除
                          </button>
                        </div>
                      </div>

                      <div className="edit-item">
                        <label className="edit-title s-text required">
                          ユーザー名
                        </label>
                        <input
                          className="input-inner edit-input-inner"
                          autocomplete="username"
                          type="text"
                          value="ケリー小田"
                          required
                        />
                      </div>

                      <div className="edit-item">
                        <label className="edit-title s-text">自己紹介</label>
                        <textarea className="edit-area">
                          私は、料理が大好きな生粋のキャンパーです。週7で、キャンプに行っています！よく出没する場所は高尾山です。
                        </textarea>
                      </div>
                    </div>
                  </div>

                  {/* 項目・アカウント設定 */}
                  <div className="edit-section" id="settings">
                    <h3 className="edit-section-title section-title edit-item">
                      アカウント設定
                    </h3>
                    <div className="edit-item">
                      <label className="edit-title s-text">Eメール</label>
                      <input
                        className="input-inner edit-input-inner"
                        autocorrect="off"
                        autocapitalize="off"
                        autocomplete="useremail"
                        type="text"
                        value="user@gmail.com"
                      />
                    </div>
                    <div className="edit-item">
                      <label className="edit-title s-text">新しいEメール</label>
                      <input
                        className="input-inner edit-input-inner"
                        autocorrect="off"
                        autocapitalize="off"
                        autocomplete="useremail"
                        type="text"
                      />
                    </div>
                  </div>

                  {/* 項目・パスワード */}
                  <div className="edit-section" id="password">
                    <h3 className="edit-section-title section-title edit-item">
                      パスワード
                    </h3>
                    <div className="edit-item">
                      <label className="edit-title s-text">
                        現在のパスワード
                      </label>
                      <input
                        className="input-inner edit-input-inner"
                        autocomplete="userpassword"
                        type="password"
                        value="user@gmail.com"
                      />
                    </div>
                    <div className="edit-item">
                      <label className="edit-title s-text">
                        新しいパスワード
                      </label>
                      <input
                        className="input-inner edit-input-inner"
                        type="password"
                        value=""
                      />
                    </div>
                  </div>

                  {/* 項目・ソーシャルメディア */}
                  <div className="edit-section" id="social-settings">
                    <h3 className="edit-section-title section-title edit-item">
                      ソーシャルメディア
                    </h3>
                    <div className="edit-item">
                      <label className="edit-title s-text">Instagram</label>
                      <div className="action-button-wrapper input-wrapper">
                        <span className="input-prefix">
                          <Instagram />
                        </span>
                        <input
                          className="input-inner w100"
                          placeholder="ユーザーネームを入力してください"
                        ></input>
                      </div>
                    </div>
                    <div className="edit-item">
                      <label className="edit-title s-text">Facebook</label>
                      <div className="action-button-wrapper input-wrapper">
                        <span className="input-prefix">
                          <Facebook />
                        </span>
                        <input
                          className="input-inner w100"
                          placeholder="ユーザーIDを入力してください"
                        ></input>
                      </div>
                    </div>
                    <div className="edit-item">
                      <label className="edit-title s-text">Twitter</label>
                      <div className="action-button-wrapper input-wrapper">
                        <span className="input-prefix">
                          <Twitter />
                        </span>
                        <input
                          className="input-inner w100"
                          placeholder="ユーザーIDを入力してください"
                        ></input>
                      </div>
                    </div>
                  </div>

                  {/* 項目・外部サービスの連携 */}
                  <div className="edit-section" id="connections">
                    <h3 className="edit-section-title section-title edit-item">
                      外部サービスのログイン連携
                    </h3>
                    <div className="edit-item edit-connections">
                      <div className="ico">
                        <Google />
                        Google
                      </div>
                      <a
                        className="button
             edit-connected-button"
                      >
                        連携済み
                      </a>
                    </div>
                    <div className="edit-item edit-connections">
                      <div className="ico">
                        <Facebook />
                        Facebook
                      </div>
                      <a className="button button-black-ol">連携する</a>
                    </div>
                  </div>

                  {/* 項目・お知らせ */}
                  <div className="edit-section" id="notifications">
                    <h3 className="edit-section-title section-title edit-item">
                      お知らせ
                    </h3>
                    <label className="edit-title s-text edit-item">
                      アクティビティの通知
                    </label>
                    <div className="hr edit-hr"></div>
                    <div className="edit-item edit-toggle-wrapper">
                      <div className="edit-toggle">
                        <input
                          id="toggle"
                          className="toggle-input"
                          type="checkbox"
                        />
                        <label for="toggle" className="toggle-label" />
                      </div>
                      <label className=" edit-title s-text s-text edit-toggle-text">
                        新しいフォロワー
                      </label>
                    </div>
                    <div className="edit-item edit-toggle-wrapper">
                      <div className="edit-toggle">
                        <input
                          id="toggle"
                          className="toggle-input"
                          type="checkbox"
                        />
                        <label for="toggle" className="toggle-label" />
                      </div>
                      <label className=" edit-title s-text s-text edit-toggle-text">
                        投稿したレシピへのレビュー
                      </label>
                    </div>
                    <div className="edit-item edit-toggle-wrapper">
                      <div className="edit-toggle">
                        <input
                          id="toggle"
                          className="toggle-input"
                          type="checkbox"
                        />
                        <label for="toggle" className="toggle-label" />
                      </div>
                      <label className=" edit-title s-text s-text edit-toggle-text">
                        フォローしているユーザーの投稿
                      </label>
                    </div>

                    <label className="edit-title s-text edit-item">
                      Ceaperの通知
                    </label>
                    <div className="hr edit-hr"></div>
                    <div className="edit-item edit-toggle-wrapper">
                      <div className="edit-toggle">
                        <input
                          id="toggle"
                          className="toggle-input"
                          type="checkbox"
                        />
                        <label for="toggle" className="toggle-label" />
                      </div>
                      <label className=" edit-title s-text s-text edit-toggle-text">
                        トレンドニュース（隔週）
                      </label>
                    </div>

                    <div className="edit-item edit-toggle-wrapper">
                      <div className="edit-toggle">
                        <input
                          id="toggle"
                          className="toggle-input"
                          type="checkbox"
                        />
                        <label for="toggle" className="toggle-label" />
                      </div>
                      <label className=" edit-title s-text s-text edit-toggle-text">
                        重要なお知らせ（アップデート等）
                      </label>
                    </div>
                  </div>

                  {/* 項目・保存する */}
                  <div
                    className="edit-section edit-item edit-save-button"
                    id="save"
                  >
                    <div>
                      <a className="button button-accent">保存する</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    );
  }
}

export default withAuth(Edit);
