import type { PropsWithChildren } from 'hono/jsx';

import { useLayout } from '@/hooks/useLayout';

type Props = Readonly<
  PropsWithChildren
>;

export default function BaseBody({ children }: Props) {
  const { Layout } = useLayout();

  return (
    <body
      class={`
        @container/base min-h-dvh w-full bg-slate-50 u-p-safe text-base/relaxed u-break-anywhere-strict
        text-slate-800/95 u-font-smoothing
      `}
    >
      <Layout>
        {children}
      </Layout>
    </body>
  );
}
