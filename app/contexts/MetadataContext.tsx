import type { PropsWithChildren } from 'hono/jsx';
import { createContext } from 'hono/jsx';

import type { Metadata } from '@/types/Metadata';

export const MetadataContext = createContext<Metadata | null>(null);

type ProviderProps = Readonly<
  PropsWithChildren<{
    metadata: Metadata;
  }>
>;

export function MetadataProvider({ children, metadata }: ProviderProps) {
  return (
    <MetadataContext value={metadata}>
      {children}
    </MetadataContext>
  );
}
