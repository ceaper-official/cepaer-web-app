import React from "react";
import Link from "next/link";

import withAuth from "@src/helpers/withAuth";
import { auth, firebase, getCurrentUser, storage, db } from "@src/firebase";
import generateRandomId from "@src/helpers/generateRandomId";
import acceptImageFileType from "@src/helpers/acceptImageFileType";

import BaseLayout from "@components/layout/BaseLayout";
import Column from "@components/column/Column";
import Container from "@components/container/Container";
import HeroText from "@components/hero/HeroText";
import SnackBar from "@components/notifications/SnackBar";
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
    this.state = {
      user: null,
      name: "",
      icon: "",
      bio: "",
    };
  }

  async componentDidMount() {
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

  onClickUpdate = (e) => {
    const { name, bio, thumgnailMediumImageUrl } = this.setState;
    const db = firebase.firestore();
    const user = getCurrentUser();
      db.collection("users").doc(user.uid).update({
        name: this.state.name,
        bio: this.state.bio,
        update_at: firebase.firestore.FieldValue.serverTimestamp(),
      })
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
                <SnackBar onClick={(e) => this.onClickUpdate(e)}>設定を保存</SnackBar>
              </FormItem>
            </Container>
          </div>
        </Column>
      </BaseLayout>
    );
  }
}

export default withAuth(EditSocial);
