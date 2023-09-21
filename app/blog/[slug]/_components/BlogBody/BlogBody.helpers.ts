export const getIdFromTweetUrl = (url: string) => {
  const segments = new URL(url).pathname.split('/');
  return segments.at(segments.length - 1);
};
