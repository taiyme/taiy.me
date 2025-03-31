import type { PropsWithChildren } from 'hono/jsx';

import CommonFooter from '@/layouts/CommonFooter';
import CommonSidebar from '@/layouts/CommonSidebar';

type Props = Readonly<
  PropsWithChildren
>;

export default function CommonLayout({ children }: Props) {
  return (
    <div
      class={`
        relative mx-auto grid min-h-dvh w-full max-w-3xl grid-cols-1 grid-rows-[1fr_auto]
        @5xl/layout:max-w-7xl @5xl/layout:grid-cols-[auto_1fr] @5xl/layout:px-[3cqw]
      `}
    >
      <CommonSidebar />
      <main
        class={`
          overflow-clip px-4 pt-[max(5dvh,1.5rem)] pb-6
          @5xl/layout:pb-[max(5dvh,1.5rem)]
        `}
      >
        <div class='@container/page'>
          {children}
        </div>
      </main>
      <CommonFooter />
      <div
        aria-hidden='true'
        class={`
          hidden
          @5xl/layout:block
        `}
      />
    </div>
  );
}
