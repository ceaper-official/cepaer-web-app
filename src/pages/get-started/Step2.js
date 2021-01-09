import React, { useState, useRef, useCallback } from "react";

import { getCurrentUser, storage, db } from "@lib/firebase";
import generateRandomId from "@src/helpers/generateRandomId";

import Column from "@components/column/Column";
import CardForm from "@components/form/CardForm";
import Button from "@components/button/Button";
import UploadIcon from "@components/form/UploadIcon";


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
    <CardForm title="アイコンの設定">
      お気に入りのユニークなアイコンを設定しましょう！設定しない場合、デフォルトのアイコンが表示されます。
      <UploadIcon/>
      <Column button>
        <Button onClick={props.previousStep} outline>前に戻る</Button>
        <Button onClick={props.nextStep}>次に進む</Button>
      </Column>
    </CardForm>
  );
}

export default Step2;
