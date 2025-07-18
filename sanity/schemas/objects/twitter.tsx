import { TwitterTweetEmbed } from 'react-twitter-embed';

const getIdFromTweetUrl = (url: string) => {
  const segments = new URL(url).pathname.split('/');
  return segments.at(segments.length - 1);
};

export const TwitterEmbedPreview = ({ url }: { url: string }) => {
  const id = getIdFromTweetUrl(url);

  if (!id) {
    console.error(`Unable to extract Twit ID from the provided URL (${url}).`);
    return null;
  }

  return <TwitterTweetEmbed tweetId={id} />;
};

const TwitterObjectSchema = {
  name: 'twitter',
  type: 'object',
  title: 'Twitter Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Tweet URL',
    },
  ],
  preview: {
    select: { url: 'url' },
  },
};

export default TwitterObjectSchema;
