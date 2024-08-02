import AppHead from '@/layouts/AppHead';
import AppProviders from '@/layouts/AppProviders';
import { clsx } from '@/utils/clsx';

type AppLayoutProps = Readonly<React.PropsWithChildren>;

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <AppProviders>
      <html lang='ja'>
        <AppHead />
        <body
          className={clsx(`
            min-h-dvh
            bg-slate-50
            p-[env(safe-area-inset-top)_env(safe-area-inset-right)_env(safe-area-inset-bottom)_env(safe-area-inset-left)]
            text-slate-800/95
            antialiased
            [line-break:strict]
            [overflow-wrap:anywhere]
            [text-rendering:optimizeLegibility]
            [word-break:normal]
          `)}
        >
          <div className='size-full @container/layout'>
            {children}
          </div>
        </body>
      </html>
    </AppProviders>
  );
}
