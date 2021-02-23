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

import Notice from "@icons/ui/notice.js";
import Mail from "@icons/ui/mail.js";
import Password from "@icons/ui/password";

/* 入力された文・値は保存 */
export class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  async componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
    const user = getCurrentUser();
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const doc = await db.collection("users").doc(user.uid).get();
      }
    });
  }

  onClickDeleteUser = (e) => {
    e.preventDefault();
    
    // Storageの削除
    const user = getCurrentUser();
    const ref = storage.ref();
    const profileRef = ref.child(`/images/profile/${user.uid}/`).listAll()
    .then((res) => {
      res.items.forEach((itemRef) => {
        storage.refFromURL(`${res.items}`).delete();
      });
    });

    // Firestoreの削除 
    db.collection('users').doc(user.uid).delete();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        if(user != null) {
          user.delete()
            .then(() => {
            console.log("success");
            firebase.auth().signOut();
            location.href = "/";
          }, error => {
            console.error();
          })
        }
      })
  };

  render() {
    return (
      <BaseLayout>
        <Column sidenav>
          <EditNav/>
          <div>
            <HeroText small="アカウントの削除">
              <p>
                アカウントを削除する場合、これまでのアクティビティ（投稿したレシピ、コレクションリスト...）が全て削除されます。また、再度アカウントを作成する場合、以前ご自身で削除したアカウントを使用・復旧する事は一切できません。
              </p>
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
              <FormItem>
                <Button negative onClick={(e) => this.onClickDeleteUser(e)}>  
                  <Notice/>
                  アカウントを削除
                </Button>
              </FormItem>
            </Container>
          </div>
        </Column>
      </BaseLayout>
    );
  }
}

export default withAuth(Delete);
