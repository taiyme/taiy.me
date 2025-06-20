import { useMetadata } from '@/hooks/useMetadata';
import CommonLayout from '@/layouts/CommonLayout';
import ZenLayout from '@/layouts/ZenLayout';

export function useLayout() {
  const { metadata } = useMetadata();
  const { layoutType = 'common' } = metadata;

  const Layout = (() => {
    switch (layoutType) {
      case 'common':
        return CommonLayout;
      case 'zen':
        return ZenLayout;
      default: {
        const exhaustiveCheck: never = layoutType;
        throw new Error(`Unexpected layoutType: ${exhaustiveCheck}`);
      }
    }
  })();

  return { Layout } as const;
}
