import type { PropsWithChildren } from 'hono/jsx';

import { MetadataProvider } from '@/contexts/MetadataContext';
import BaseBody from '@/layouts/BaseBody';
import BaseHead from '@/layouts/BaseHead';
import type { Metadata } from '@/types/Metadata';

type Props = Readonly<
  PropsWithChildren<{
    metadata: Metadata;
  }>
>;

export default function BaseLayout({ children, metadata }: Props) {
  return (
    <MetadataProvider
      metadata={metadata}
    >
      <html lang='ja'>
        <BaseHead />
        <BaseBody>
          {children}
        </BaseBody>
      </html>
    </MetadataProvider>
  );
}
