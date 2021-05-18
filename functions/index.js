const admin = require("firebase-admin");

// ローカル開発の際に利用する
const serviceAccount = require("./serviceAccountKey");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ceaper-20200424.firebaseio.com",
});
// admin.initializeApp();

const functions = {
  // Write function references
  generatePostThumbnail: "./src/generatePostThumbnail",
  generateProfileThumbnail: "./src/generateProfileThumbnail",
  postCopy: "./src/postCopy",
};

loadFunctions = (funcs) => {
  for (let name in funcs) {
    if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === name) {
      // eslint-disable-next-line import/no-dynamic-require
      exports[name] = require(funcs[name]);
    }
  }
};

loadFunctions(functions);
