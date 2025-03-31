import { SITE_BASE_URL } from '@/constants/site';
import type { MetadataBaseOpenGraphImage } from '@/types/metadata';

export const OG_DEFAULT_IMAGE = {
  ogImageUrl: new URL('/images/favicons/open-graph.png', SITE_BASE_URL).href,
  ogImageAlt: 'taiyのアイコン',
  ogImageType: 'image/png',
  ogImageWidth: 384,
  ogImageHeight: 384,
} as const satisfies MetadataBaseOpenGraphImage;
