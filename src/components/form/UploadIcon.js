import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";

import { getCurrentUser, storage, db, auth, firebase } from "@lib/firebase";
import withAuth from "@src/helpers/withAuth";
import generateRandomId from "@src/helpers/generateRandomId";
import acceptImageFileType from "@src/helpers/acceptImageFileType";

import Add from "@icons/ui/add.js";

import s from "./Upload.module.scss";

const UploadIcon = (props) => {

  const [thumgnailMediumImageUrl, setProfileImageUrl] = useState("");
  const inputRef = useRef(null);

  const onClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, [inputRef]);

  const onChangeImage = useCallback(async (event) => {
    
    // すでに画像があったら古い画像をStorageから削除
    const user = getCurrentUser();
    const ref = storage.ref();
    const profileRef = ref.child(`/images/profile/${user.uid}/`).listAll()
    .then((res) => {
      res.items.forEach((itemRef) => {
        if (res.items) {
          storage.refFromURL(`${res.items}`).delete();
        }
      });
    });

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
      const fileName = `${generateRandomId()}.jpg`;
      const snapshot = await ref
        .child(`images/profile/${user.uid}/${fileName}`)
        .put(file);

      // アップロード後に取得したthumgnailMediumImageUrlをDBに保存する
      const savedImageUrl = await snapshot.ref.getDownloadURL();
      await db.collection("users").doc(user.uid).update({
        thumgnailMediumImageUrl: savedImageUrl,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

    let imgUrl = props.src
      if (thumgnailMediumImageUrl) {
        imgUrl = thumgnailMediumImageUrl
      } else if (!thumgnailMediumImageUrl) {
        imgUrl = props.src
      };

  return (
    <div className={s.upload__icon}>
      <input
        ref={inputRef}
        onChange={onChangeImage}
        accept={acceptImageFileType}
        style={{ display: "none" }}
        type="file"
      />
          <div class={s.upload__icon__inner} onClick={onClick}>
            <img className={s.upload__img} src={imgUrl} alt="profile icon"　onError={(e) => e.target.src = "https://firebasestorage.googleapis.com/v0/b/ceaper-20200424.appspot.com/o/images%2Fprofile%2Fdefault_icon%2Fuser.svg?alt=media&token=488a434c-66fa-4dab-b691-8e578c122eae"}　/>
            {props.icon}
          </div>
          <p className={s.upload__helper__text} onClick={onClick}>
            アイコンを変更する
          </p>
    </div>
  );
};

export default UploadIcon;
