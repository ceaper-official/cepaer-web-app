# Ceaper

### セットアップ

```
npm install
```

```
cp env.sample .env
```

Firebase の設定は Firebase Console 上で確認

### 起動

```
npm run dev
```

### 外部に公開

```
ngrok http 3000
```

### Firebase FunctionsのDeploy
※ セットアップが完了していない方は以下の手順でセットアップを行う
```
npm install firebase-functions@latest firebase-admin@latest --save
npm install -g firebase-tools
```

```
firebase login
```

セットアップが完了している方は以下の手順でDeployを行う
```
cd functions/
npm install
npm run deploy
```
