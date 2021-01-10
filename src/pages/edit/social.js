import React from "react";

import withAuth from "@src/helpers/withAuth";
import { firebase, getCurrentUser } from "@src/firebase";
import generateRandomId from "@src/helpers/generateRandomId";

import BaseLayout from "@components/layout/BaseLayout";
import Column from "@components/column/Column";
import Container from "@components/container/Container";
import HeroText from "@components/hero/HeroText";
import Input from "@components/form/Input";
import FormItem from "@components/form/FormItem";
import HelperText from "@components/form/HelperText";
import SnackBarSave from "@src/components/notifications/SnackBarSave";
import EditNav from "./EditNav";

import At from "@icons/ui/at";

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
            <HeroText small="ソーシャルメディア">
            </HeroText>
            <Container>
              <FormItem label="Instagram">
                <Input
                  icon={<At />}
                />
                <HelperText strong="ceaper">
                  https://www.instagram.com/
                </HelperText>
              </FormItem>
              <FormItem label="Twitter">
                <Input
                  value="ceaper"
                  icon={<At />}
                />
                <HelperText strong="ceaper">
                  https://twitter.com/
                </HelperText>
              </FormItem>
              <FormItem label="Facebook">
                <Input
                  value="ceaper"
                  icon={<At />}
                />
                <HelperText strong="ceaper">
                  https://www.facebook.com/
                </HelperText>
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

export default withAuth(EditSocial);
