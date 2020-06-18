/**
 * ファイルタイプの取得
 * @param mimetype
 * @returns {*}
 */
function getImageFileType(mimetype) {
  return [
    { ext: "jpg", mime: "image/jpeg" },
    { ext: "png", mime: "image/png" },
  ].find((ext) => {
    return ext.mime === mimetype;
  });
}

export default getImageFileType;
