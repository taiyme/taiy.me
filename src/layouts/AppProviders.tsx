'use client';

import { Provider as JotaiProvider } from 'jotai';
import { ViewTransitions } from 'next-view-transitions';

type AppProvidersProps = Readonly<React.PropsWithChildren>;

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <ViewTransitions>
      <JotaiProvider>
        {children}
      </JotaiProvider>
    </ViewTransitions>
  );
}
