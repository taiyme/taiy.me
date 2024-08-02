import CommonFooter from '@/layouts/CommonFooter';
import CommonSidebar from '@/layouts/CommonSidebar';
import { clsx } from '@/utils/clsx';

type CommonLayoutProps = Readonly<React.PropsWithChildren>;

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <div
      className={clsx(`
        relative
        mx-auto
        grid
        size-full
        max-w-3xl
        grid-cols-1
        @5xl/layout:max-w-7xl
        @5xl/layout:grid-cols-[auto_1fr]
        @5xl/layout:grid-rows-[1fr_auto]
        @5xl/layout:px-[3cqw]
      `)}
    >
      <CommonSidebar />
      <main
        className={clsx(`
          overflow-clip
          px-4 pb-6 pt-[max(5dvh,1.5rem)]
          @5xl/layout:pb-[max(5dvh,1.5rem)]
        `)}
      >
        <div className='@container/page'>
          {children}
        </div>
      </main>
      <CommonFooter />
      <div
        aria-hidden='true'
        className='hidden @5xl/layout:block'
      />
    </div>
  );
}
