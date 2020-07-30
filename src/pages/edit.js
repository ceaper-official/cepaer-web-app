import React from "react";
import Link from "next/link";

import BaseLayout from "@components/layout/BaseLayout";

import Add from "@icons/ui/add.js";
import SettingSolid from "@icons/ui/setting_solid.js";
import Upload from "@icons/ui/upload.js";
import Cross from "@icons/ui/cross.js";
import Instagram from "@icons/social/instagram.js";
import Twitter from "@icons/social/twitter.js";
import Google from "@icons/social/google.js";
import Facebook from "@icons/social/facebook.js";
import NavEdit from "../layouts/nav-edit.js";
import { getCurrentUser, storage, db } from "../lib/firebase";
import withAuth from "../src/helpers/withAuth";
import { auth, firebase } from "../src/firebase";
import generateRandomId from "../src/helpers/generateRandomId";
import acceptImageFileType from "../src/helpers/acceptImageFileType";

function User({ imageUrl }) {
  return <img src={imageUrl || "images/default/user.jpg"} alt="user image" />;
}

/* 入力された文・値は保存 */
export class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      profileImageUrl: "",
    };
  }

  async componentDidMount() {
    // TODO: Firestoreからユーザ情報を取得
    try {
      const user = getCurrentUser();
      const userDoc = await db.collection("users").doc(user.uid).get();
      console.log(userDoc);
      this.setState({
        name: userDoc.data.name,
        about: userDoc.data.about,
        profileImageUrl: userDoc.data.image,
      });
    } catch (error) {
      console.error(error);
    }
  }

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

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.setState({
          profileImageUrl: reader.result,
        });
      };

      // Firebase Storageへアップロード
      const user = getCurrentUser();
      const ref = storage.ref();
      const fileName = `${generateRandomId()}.jpg`;
      await ref.child(`images/profile/${user.uid}/${fileName}`).put(file);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <BaseLayout>
        <div id="page" className="side-nav-page">
          <div className="user-row edit-row">
            <div className="contents">
              <div className="section edit-wrapper center-section">
                <NavEdit />

                <div className="edit-inner">
                  {/* 項目・プロフィール */}
                  <div className="edit-section" id="profile">
                    <div className="user-container">
                      <h3 className="edit-section-title section-title edit-item">
                        {this.state.name} さんのプロフィール
                      </h3>
                      <input
                        ref={this.inputRef}
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
                            className="button-ol  ico"
                            onClick={this.onClickProfileImage}
                            style={{ marginRight: "1rem" }}
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
                        <label className="edit-title s-text">ユーザー名</label>
                        <input
                          className="input-inner edit-input-inner"
                          autocomplete="username"
                          type="text"
                          value={this.state.name}
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
                      <a className="button-ol">連携する</a>
                    </div>
                  </div>

                  {/* 項目・お知らせ */}
                  <div className="edit-section" id="notifications">
                    <h3 className="edit-section-title section-title edit-item">
                      お知らせ
                    </h3>

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
                      <button className="button button-accent">保存する</button>
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
