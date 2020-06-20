"use strict";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const shouldGenerateThumbnail = require("./helpers/shouldGenerateThumbnail");
const generateThumbnail = require("./helpers/generateThumbnail");

module.exports = functions
  .region("asia-northeast1")
  .firestore.document("users/{userId}/posts/{postId}")
  .onWrite(async (change, context) => {
    const previousData = change.before.data();
    const afterData = change.after.data();

    // サムネイル生成が可能かチェック
    if (!shouldGenerateThumbnail(previousData, afterData)) {
      return;
    }

    const { postId, userId } = context.params;

    // サムネイル生成パラメータの設定
    const imageUrl = afterData.originalImageUrl;
    const destination = `/images/post/${postId}`;
    const sizes = [
      [700, 525],
      [1200, 900],
    ];

    // サムネイル画像生成実行
    const thumbnailImageUrls = await generateThumbnail(
      imageUrl,
      destination,
      sizes
    );

    if (!thumbnailImageUrls || thumbnailImageUrls.length === sizes.length) {
      console.error("thumbnailImageUrls not found");
      return;
    }

    console.log(thumbnailImageUrls);

    // DBの更新
    await admin
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("posts")
      .doc(postId)
      .update({
        thumgnailMediumImageUrl: thumbnailImageUrls[0],
        thumgnailLargeImageUrl: thumbnailImageUrls[1],
      });
  });
