import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";

import { getCurrentUser, storage, db } from "@lib/firebase";
import { auth, firebase } from "@src/firebase";
import withAuth from "@src/helpers/withAuth";
import generateRandomId from "@src/helpers/generateRandomId";
import acceptImageFileType from "@src/helpers/acceptImageFileType";

import Add from "@icons/ui/add.js";

import s from "./Upload.module.scss";

const UploadIcon = (props) => {
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
      <div className={s.upload__icon}>
        <input
          ref={inputRef}
          onChange={onChangeImage}
          accept={acceptImageFileType}
          style={{ display: "none" }}
          type="file"
        />
      {/* アップロードされたら、.gs-uploadの中に、画像表示 */}
        <div class={s.upload__icon__inner}>
          {profileImageUrl ? (
            <img className={s.upload__img} src={profileImageUrl} alt="profile icon"/>
          ) : (
            <div class={s.upload__icon__inner} onClick={onClick}>
              <span className={s.icon}><Add/></span>
                <img className={s.upload__img} src="images/mock/user.jpg" alt="profile icon"/>
            </div>
          )}
          {props.icon}
        </div>
      </div>
      );
};

export default UploadIcon;
