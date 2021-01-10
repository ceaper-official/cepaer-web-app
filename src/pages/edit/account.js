import React from "react";

import withAuth from "@src/helpers/withAuth";
import { firebase, getCurrentUser } from "@src/firebase";

import BaseLayout from "@components/layout/BaseLayout";
import Column from "@components/column/Column";
import Container from "@components/container/Container";
import HeroText from "@components/hero/HeroText";
import Input from "@components/form/Input";
import FormItem from "@components/form/FormItem";
import SnackBarSave from "@src/components/notifications/SnackBarSave";
import EditNav from "./EditNav";

import Mail from "@icons/ui/mail.js";

/* 入力された文・値は保存 */
export class EditAccount extends React.Component {
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
            <HeroText small="アカウント情報">
            </HeroText>
            <Container>
              <FormItem label="現在のメールアドレス">
                <Input
                  icon={<Mail />}
                />
              </FormItem>
              <FormItem label="新しいメールアドレス">
                <Input
                  icon={<Mail />}
                />
              </FormItem>
              <FormItem>
                <SnackBarSave onClick={(e) => this.onClickUpdate(e)}>設定を保存</SnackBarSave>
              </FormItem>
            </Container>
          </div>
        </Column>
      </BaseLayout>
    );
  }
}

export default withAuth(EditAccount);
