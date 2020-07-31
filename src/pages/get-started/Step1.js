import Router from 'next/router';

import CardForm from "@components/form/CardForm";
import Input from "@components/form/Input";
import Button from "@components/button/Button";

import Human from "@icons/ui/human";

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <CardForm title="ユーザー名の設定">
      Cepaerを始める前に、あなたのプロフィールを完成させましょう。
      <Input
        placeholder="例：キーパー山田"
        icon={<Human/>}
      />
    <Button onClick={props.nextStep}>次に進む</Button>
    </CardForm>
  );
}

export default Step1;
