import type { Link } from 'next-view-transitions';

import { metadata } from '@/constants/metadata';

export const resolveUrl = (href: React.ComponentProps<typeof Link>['href']) => {
  const resolvedUrl = new URL(href.toString(), metadata.metadataBase);
  const isExternalUrl = metadata.metadataBase.origin !== resolvedUrl.origin;
  return { resolvedUrl, isExternalUrl } as const;
};
