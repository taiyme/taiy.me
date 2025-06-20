import { useContext } from 'hono/jsx';

import { MetadataContext } from '@/contexts/MetadataContext';

export function useMetadata() {
  const metadata = useContext(MetadataContext);

  if (metadata == null) {
    throw new Error('No metadata provided.');
  }

  return { metadata } as const;
}
