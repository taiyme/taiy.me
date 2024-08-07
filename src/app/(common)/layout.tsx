import CommonLayout from '@/layouts/CommonLayout';

type LayoutProps = Readonly<React.PropsWithChildren>;

export default function Layout({ children }: LayoutProps) {
  return (
    <CommonLayout>
      {children}
    </CommonLayout>
  );
}
