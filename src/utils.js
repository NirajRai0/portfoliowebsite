export const getImageUrl = (path) => {
   return new URL(`${process.env.PUBLIC_URL}/assets${path}`).toString();
 };
