'use client';

import { ViewTransitions } from 'next-view-transitions';

type AppProvidersProps = Readonly<React.PropsWithChildren>;

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <ViewTransitions>
      {children}
    </ViewTransitions>
  );
}
