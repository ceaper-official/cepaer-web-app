import Router from 'next/router';

import { getCurrentUser, storage, db } from "@lib/firebase";
import { auth, firebase } from "@src/firebase";

import CardForm from "@components/form/CardForm";
import Input from "@components/form/Input";
import Button from "@components/button/Button";

import Human from "@icons/ui/human";

export class Step1 extends React.Component {
  constructor(props) {
    // Stateの定義
    super(props);
    this.state = {
      name: "",
    };
  }

onClickUpdate = (e) => {
  const { name } = this.setState;
  const db = firebase.firestore();
  const user = getCurrentUser();
    db.collection("users").doc(user.uid).update({
      name: this.state.name,
    })
};

nextStep = (e) => {
  if (props.currentStep !== 1) {
    return null;
    }
  };

  render() {
  return (
    <CardForm title="ユーザー名の設定">
      Cepaerを始める前に、あなたのプロフィールを完成させましょう。
      <Input
        placeholder="例：キーパー山田"
        icon={<Human/>}
        onChange={(e) => this.setState({ name: e.target.value })}
      />
    <Button
    onClick={(e) => {
      this.onClickUpdate(e);
      this.props.nextStep(e);
    }}
    >次に進む</Button>
    </CardForm>
    );
  }
}
export default Step1;
