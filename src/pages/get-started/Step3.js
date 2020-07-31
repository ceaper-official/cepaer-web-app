import Router from 'next/router';

import { db } from "@lib/firebase";
import { auth, firebase } from "@src/firebase";

import CardForm from "@components/form/CardForm";
import Input from "@components/form/Input";
import Button from "@components/button/Button";

import Mail from "@icons/ui/mail.js";
import Password from "@icons/ui/password.js";

class Step3 extends React.Component {

  constructor(props) {
    // Stateの定義
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailSignIn = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    var verified = firebase.auth().currentUser.emailVerified;
    console.log(verified);
    if (!verified) {
      // メアド確認終わってない
      firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log;
      alert("メールアドレス認証が完了していません。");
    } else {
      // メアド確認終わってる
      const firestore = firebase.firestore();
      auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          return firestore.collection("users").doc(res.user.uid).set({
            name: res.user.displayName,
            originalImageUrl: res.user.photoURL,
            thumgnailMediumImageUrl: res.user.photoURL,
            created_at: firebase.firestore.FieldValue.serverTimestamp(),
            update_at: firebase.firestore.FieldValue.serverTimestamp(),
          });
        })
        .then(() => {
          location.href = "./index";
        })
        .catch((err) => {
          alert("メールアドレスかパスワードが違います。");
          console.log(err);
        });
    }
  };

render()  {
  return (
    <CardForm title="Ceaperへようこそ！">
      プロフィールの設定が完了しました。ログインをして、早速Ceaperを始めましょう！
      <Input
        placeholder="Eメール"
        icon={<Mail/>}
        onChange={(e) => this.setState({ email: e.target.value })}
      />
      <Input ps
        placeholder="パスワード"
        icon={<Password/>}
        onChange={(e) => this.setState({ password: e.target.value })}
        sub="お忘れですか？"
        href="/forgot-password"
      />
      <Button onClick={(e) => this.handleEmailSignIn(e)}>ログイン</Button>
    </CardForm>
  );
}
}

export default Step3;
