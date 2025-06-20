import type { PropsWithChildren } from 'hono/jsx';

import CommonContent from '@/layouts/CommonContent';
import CommonFooter from '@/layouts/CommonFooter';
import CommonSidebar from '@/layouts/CommonSidebar';

type Props = Readonly<
  PropsWithChildren
>;

export default function CommonLayout({ children }: Props) {
  return (
    <div
      class={`
        relative mx-auto grid min-h-dvh w-full max-w-3xl grid-cols-1 grid-rows-[minmax(0,1fr)_auto]
        @5xl:max-w-7xl @5xl:grid-cols-[auto_minmax(0,1fr)] @5xl:grid-rows-1 @5xl:px-[3cqw]
      `}
    >
      <header
        class={`
          sticky top-0 row-span-2 hidden h-dvh w-[30cqw] max-w-96 overflow-x-clip overflow-y-hidden
          @5xl:block
        `}
      >
        <CommonSidebar />
      </header>
      <main
        class='overflow-clip'
      >
        <CommonContent>
          {children}
        </CommonContent>
      </main>
      <footer
        class={`
          overflow-clip
          @5xl:hidden
        `}
      >
        <CommonFooter />
      </footer>
    </div>
  );
}
