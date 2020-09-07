# Ceaper

### セットアップ

```
npm install
```

```
cp env.sample .env
```

Firebase の設定は Firebase Console 上で確認。

### ローカル起動

```
npm run dev
```

### 外部に公開

```
ngrok http 3000
```

### Firebase Functions の Deploy

セットアップが完了していない場合、以下の手順でセットアップを行う。

```
npm install firebase-functions@latest firebase-admin@latest --save

npm install -g firebase-tools

```

```
firebase login
```

セットアップが完了している方は以下の手順で Deploy を行う

```
cd functions/
npm install
npm run deploy
```

### Firebase

1. Firestore からデータの呼び出し＆表示

```jsx
import { getCurrentUser, storage } from "@lib/firebase";
import { firebase } from "@src/firebase";

export class Firestore extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      user: null,
      name: "",
      icon: "",
      bio: "",
    };
  }

  componentDidMount() {
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

  render() {
    return (
      <BaseLayout>
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
      </BaseLayout>
    );
  }
}

export default withAuth(Firestore);
```
