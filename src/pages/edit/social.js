import React from "react";
import Link from "next/link";

import { firebase, getCurrentUser } from "@src/firebase";
import withAuth from "@src/helpers/withAuth";
import generateRandomId from "@src/helpers/generateRandomId";
import acceptImageFileType from "@src/helpers/acceptImageFileType";

import BaseLayout from "@components/layout/BaseLayout";
import Column from "@components/column/Column";
import Container from "@components/container/Container";
import HeroText from "@components/hero/HeroText";
import Button from "@components/button/Button";
import Input from "@components/form/Input";
import FormItem from "@components/form/FormItem";
import HelperText from "@components/form/HelperText";
import EditNav from "./EditNav";
import SnackBarSave from "@src/components/notifications/SnackBarSave";


import At from "@icons/ui/at";

/* 入力された文・値は保存 */
export class EditSocial extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      facebook: "",
      twitter: "",
      instagram: "",
    };
  }

  componentDidMount() {
    // Firestoreからユーザ情報を取得
    const db = firebase.firestore();
    const user = getCurrentUser();
    firebase.auth().onAuthStateChanged(async (user) => {
      if(user) {
        const doc = await db.collection("users").doc(user.uid).get();
        const data = doc.data();
        if(data) {
          this.setState({
            facebook: data.facebook,
            twitter: data.twitter,
            instagram: data.instagram,
          });
        }
      }
    });
  }

  onClickUpdate = (e) => {
    const { facebook, twitter, instagram } = this.setState;
    const db = firebase.firestore();
    const user = getCurrentUser();
    db.collection("users").doc(user.uid).update({
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      instagram: this.state.instagram,
      update_at: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error){
      console.error("Error writing document: ", error);
    });
  };

  render() {
    return (
      <BaseLayout>
        <Column sidenav>
          <EditNav/>
          <div>
            <HeroText small="ソーシャルメディア">
            </HeroText>
            <Container>
              <FormItem label="Instagram">
              <Input
                  value={this.state.instagram}
                  icon={<At/>}
                  onChange={(e) => this.setState({ instagram: e.target.value })}
                />
                <HelperText strong={this.state.instagram}>
                  <a href={`https://www.instagram.com/${this.state.instagram}`}>https://www.instagram.com/</a>
                </HelperText>
              </FormItem>
              <FormItem label="Twitter">
              <Input
                  value={this.state.twitter}
                  icon={<At/>}
                  onChange={(e) => this.setState({ twitter: e.target.value })}
                />
                <HelperText strong="ceaper">
                  <a href={`https://twitter.com/${this.state.twitter}`}>https://twitter.com/</a>
                </HelperText>
              </FormItem>
              <FormItem label="Facebook">
              <Input
                  value={this.state.facebook}
                  icon={<At/>}
                  onChange={(e) => this.setState({ facebook: e.target.value })}
                />
                <HelperText strong={this.state.facebook}>
                  <a href={`https://www.facebook.com/${this.state.facebook}`}>https://www.facebook.com/</a>
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
