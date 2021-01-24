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
import FormItem from "@components/form/FormItem";
import HelperText from "@components/form/HelperText";
import EditNav from "./EditNav";

import Mail from "@icons/ui/mail.js";
import Password from "@icons/ui/password";

/* 入力された文・値は保存 */
export class EditPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      setpassword: "",
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  onClickUpdatePassword = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        if(user != null) {
          const newPassword = this.state.setpassword;
          user.updatePassword(newPassword)
          .then(() => {
            console.log("success");
            firebase.auth().signOut();
            location.href = "/signin";
          }, error => {
            console.error();
          })
        }
      })
  };

  setPasswordText = (e) => {
    const { setpassword } = this.setState;
    this.setState({ setpassword: e.target.value });
  }

  render() {
    const {
      password,
      setpassword,
    } = this.state;
    return (
      <BaseLayout>
        <Column sidenav>
          <EditNav/>
          <div>
            <HeroText small="パスワードの変更">
            </HeroText>
            <Container>
            <FormItem label="現在のメールアドレス">
                <Input
                  icon={<Mail />}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  type="email"
                />
              </FormItem>
              <FormItem label="現在のパスワード">
                <Input ps
                  placeholder="パスワード"
                  icon={<Password/>}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  />
              </FormItem>
              <FormItem label="新しいパスワード">
                <Input ps
                  placeholder="パスワード"
                  icon={<Password/>}
                  onChange={(e) => {this.setPasswordText(e)}}
                  value={setpassword}
                />
              </FormItem>
              <FormItem>
                <Button onClick={(e) => this.onClickUpdatePassword(e)}>
                  設定を保存
                </Button>
              </FormItem>
            </Container>
          </div>
        </Column>
      </BaseLayout>
    );
  }
}

export default withAuth(EditPassword);
