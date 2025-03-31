import type { PropsWithChildren } from 'hono/jsx';

import BaseHead from '@/layouts/BaseHead';
import CommonLayout from '@/layouts/CommonLayout';
import CommonLayoutSimple from '@/layouts/CommonLayoutSimple';
import type { Metadata } from '@/types/metadata';

type Props = Readonly<
  PropsWithChildren<{
    metadata: Metadata;
  }>
>;

export default function BaseLayout({ children, metadata }: Props) {
  const Layout = (
    metadata.layoutType === 'commonSimple'
      ? CommonLayoutSimple
      : CommonLayout
  );

  return (
    <html lang='ja'>
      <BaseHead {...metadata} />
      <body
        class={`
          min-h-dvh w-full bg-slate-50
          p-[env(safe-area-inset-top)_env(safe-area-inset-right)_env(safe-area-inset-bottom)_env(safe-area-inset-left)]
          text-slate-800/95 antialiased
          [overflow-wrap:anywhere]
          [word-break:normal]
          [line-break:strict]
          [text-rendering:optimizeLegibility]
        `}
      >
        <div class='@container/layout min-h-dvh w-full'>
          <Layout>
            {children}
          </Layout>
        </div>
      </body>
    </html>
  );
}
