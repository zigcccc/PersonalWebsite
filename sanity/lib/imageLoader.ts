import { dataset, projectId } from '../env';

const sanityLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  const url = new URL(`https://cdn.sanity.io/images/${projectId}/${dataset}${src}`);
  url.searchParams.set('auto', 'format');
  url.searchParams.set('fit', 'max');
  url.searchParams.set('w', width.toString());
  if (quality) {
    url.searchParams.set('q', quality.toString());
  }
  return url.href;
};

export default sanityLoader;
