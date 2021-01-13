# Ceaper

### セットアップ

1. npm のインストール

```
npm install
```

2. env ファイルの作成

```
cp env.sample .env
```

3. Firebase のセットアップ

```
npm install firebase-functions@latest firebase-admin@latest --save
npm install -g firebase-tools
firebase login
```

4. Firebase Functions の Deploy

```
npm run deploy
```

### 開発サーバー起動: ポート番号 3000

```
npm run dev
```

### 開発サーバー起動: IP アドレス

```
npx next dev -H 〇〇.〇〇.〇〇.〇〇
```

### 外部に公開

```
ngrok http 3000
```

### Firebase

1. Firestore からデータの呼び出し＆表示

```jsx
import React from "react";
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
