"use strict";

const admin = require("firebase-admin");
const os = require("os");
const path = require("path");
const sharp = require("sharp");
const fs = require("fs");

/**
 *
 * @param {string} imageUrl 取得した画像URL
 * @param {string} destination ファイル保存先
 * @param {number[][]} sizes 保存するサイズ
 */
module.exports = async (imageUrl, destination, sizes) => {
  // 空の場合は無視
  if (!imageUrl || !destination || !sizes || sizes.length === 0) {
    console.error(`parameter is empty`);
    return;
  }

  const fileName = path.basename(imageUrl);
  if (!fileName) {
    console.error(`fileName not found`);
    return;
  }

  const filePath = path.join(destination, fileName);
  if (!filePath) {
    console.error(`filePath not found`);
    return;
  }

  const bucketDir = path.dirname(filePath);

  const workingDir = path.join(os.tmpdir(), "thumbnails");
  const tmpFilePath = path.join(workingDir, fileName);

  const thumbIdentifier = "thumb@";

  // 1. サムネイルのフォルダ確認(なければ作成)
  await fs.ensureDir(workingDir);

  // 2. GCSから画像をダウンロード
  const bucket = getBucket();

  await bucket.file(filePath).download({
    destination: tmpFilePath,
  });

  // 3. 画像のりサイズを行うPromiseを配列で生成
  const uploadPromises = sizes.map(async (size) => {
    const thumbName = `${thumbIdentifier}${size[0]}x${size[1]}_${fileName}`;
    const thumbPath = path.join(workingDir, thumbName);

    // Resize source image
    await sharp(tmpFilePath).resize(size[0], size[1]).toFile(thumbPath);

    // Upload to GCS
    const uploadPath = path.join(bucketDir, thumbName);
    await bucket.upload(thumbPath, {
      destination: uploadPath,
    });

    const downloadUrl = getDownloadURL(uploadPath);
    return downloadUrl;
  });

  // 4. リサイズ(Promise)の実行
  const thumbnailUrls = await Promise.all(uploadPromises);

  fs.remove(workingDir);

  // 5. サムネイル画像一覧を返す
  // eslint-disable-next-line consistent-return
  return thumbnailUrls;
};

/**
 * storageBucketのURLを取得
 * example: https://storage.googleapis.com/fasta-development-d9d7a.appspot.com
 */
function getStorageBucket() {
  const config = process.env.FIREBASE_CONFIG;
  return JSON.parse(config).storageBucket;
}

/**
 * バケットの取得
 */
function getBucket() {
  const storageBucket = getStorageBucket();
  const bucket = admin.storage().bucket(storageBucket);
  return bucket;
}

/**
 * Cloud Storageへのダウンロード(StoregeのURL取得)
 * 簡易化のため、署名付きURLの取得ではなく、Storage上のURLを生成しています。
 *
 * @param {string} uploadedPath アップロード済みのstorage上のパス
 * @returns {string} ダウンロードURL
 */
function getDownloadURL(uploadedPath) {
  const bucket = getBucket();
  const STORAGE_ROOT = "https://firebasestorage.googleapis.com/v0/b";
  const bucketName = bucket.name;
  const dlPath = encodeURIComponent(uploadedPath);
  const dlURL = `${STORAGE_ROOT}/${bucketName}/o/${dlPath}?alt=media`;

  return dlURL;
}
