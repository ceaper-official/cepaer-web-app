import React from "react";
import Link from "next/link";

import { getCurrentUser, storage, db } from "@lib/firebase";
import withAuth from "@src/helpers/withAuth";
import { auth, firebase } from "@src/firebase";
import generateRandomId from "@src/helpers/generateRandomId";
import acceptImageFileType from "@src/helpers/acceptImageFileType";

import BaseLayout from "@components/layout/BaseLayout";
import Column from "@components/column/Column";
import Container from "@components/container/Container";
import HeroText from "@components/hero/HeroText";
import Button from "@components/button/Button";
import Input from "@components/form/Input";
import TextArea from "@components/form/TextArea";
import FormItem from "@components/form/FormItem";
import HelperText from "@components/form/HelperText";
import UploadIcon from "@components/form/UploadIcon";
import EditNav from "./EditNav";

import Mail from "@icons/ui/mail.js";

/* 入力された文・値は保存 */
export class EditSocial extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      user: null,
      name: "",
      icon: "",
      bio: "",
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    const user = getCurrentUser();
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const doc = await db.collection("users").doc(user.uid).get();
        const data = doc.data();
        if (data) {
          this.setState({
            user,
            name: data.name,
            icon: data.thumgnailMediumImageUrl,
            bio: data.bio,
          });
        }
      }
    });
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
      const fileName = `${generateRandomId()}_original.jpg`;
      await ref.child(`images/profile/${user.uid}/${fileName}`).put(file);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <BaseLayout>
        <Column sidenav>
          <EditNav />
          <div>
            <HeroText small="プロフィール"></HeroText>
            <Container>
              <FormItem label="アイコン">
                <UploadIcon src={this.state.icon} />
              </FormItem>
              <FormItem label="ユーザー名">
                <Input
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </FormItem>
              <FormItem label="自己紹介">
                <TextArea
                  value={this.state.bio}
                  onChange={(e) => this.setState({ bio: e.target.value })}
                />
              </FormItem>
              <FormItem>
                <Button>設定を保存</Button>
              </FormItem>
            </Container>
          </div>
        </Column>
      </BaseLayout>
    );
  }
}

export default withAuth(EditSocial);
