export const isValidImage = (image) => {
  if (image && image[0] && image[0].contentUrl) {
    return true;
  }

  return false;
};