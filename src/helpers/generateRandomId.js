/**
 * Generate random id
 */
function generateRandomId(length = 20) {
  // Alphanumeric characters
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";
  for (let i = 0; i < length; i += 1) {
    randomId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomId;
}

export default generateRandomId;
