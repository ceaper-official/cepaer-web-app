"use strict";

// サムネイル生成すべきかチェック
module.exports = (previousData, afterData) => {
  if (!previousData && afterData && afterData.originalImageUrl) {
    // Create
    return true;
  } else if (
    previousData &&
    previousData.originalImageUrl &&
    afterData &&
    afterData.originalImageUrl &&
    previousData.originalImageUrl !== afterData.originalImageUrl
  ) {
    // originalImageUrlをupdate時
    return true;
  }
  return false;
};
