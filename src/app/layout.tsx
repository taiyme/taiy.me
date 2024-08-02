import '@/styles/globals.css';

import AppLayout from '@/layouts/AppLayout';

export { metadata } from '@/constants/metadata';
export { viewport } from '@/constants/viewport';

type LayoutProps = Readonly<React.PropsWithChildren>;

export default function Layout({ children }: LayoutProps) {
  return (
    <AppLayout>
      {children}
    </AppLayout>
  );
}
