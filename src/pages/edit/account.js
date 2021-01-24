import React from "react";

import { auth, firebase } from "@src/firebase";
import { getCurrentUser, storage, db } from "@lib/firebase";
import withAuth from "@src/helpers/withAuth";

import BaseLayout from "@components/layout/BaseLayout";
import Column from "@components/column/Column";
import Container from "@components/container/Container";
import HeroText from "@components/hero/HeroText";
import HelperText from "@components/form/HelperText";
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
      email: "",
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  onClickUpdateEmail = (e) => {
    e.preventDefault();
    const newEmail = this.state.email;
    const user = firebase.auth().currentUser;
      user.updateEmail(newEmail)
      .then(() => {
        user.sendEmailVerification();
        firebase.auth().signOut();
        location.href = "/signin";
      }, error => {
        console.error();
      })
  };

  setEmailText = (e) => {
    const { email } = this.setState;
    this.setState({ email: e.target.value });
  }

  render() {
    const {
      email,
    } = this.state;
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
                  value={this.state.user && this.state.user.email}
                  type="email"
                />
              </FormItem>
              <FormItem label="新しいメールアドレス">
                <Input
                  icon={<Mail />}
                  onChange={(e) => {this.setEmailText(e)}}
                  value={email}
                  type="email"
                />
                <HelperText>
                  <p> メールアドレスを変更すると確認メールが送信されます。メール内のURLをクリックすると変更完了です。</p>
                </HelperText>
              </FormItem>
              <FormItem>
                <SnackBarSave onClick={(e) => this.onClickUpdateEmail(e)}>設定を保存</SnackBarSave>
              </FormItem>
            </Container>
          </div>
        </Column>
      </BaseLayout>
    );
  }
}

export default withAuth(EditAccount);
