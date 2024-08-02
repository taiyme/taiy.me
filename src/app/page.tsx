import type { Metadata } from 'next';

import Profile from '@/features/Profile';
import CommonLayoutSimple from '@/layouts/CommonLayoutSimple';
import { clsx } from '@/utils/clsx';
import { generateStaticMetadata } from '@/utils/generateStaticMetadata';

export const metadata = {
  ...generateStaticMetadata({
    title: {
      absolute: 'taiy.me',
    },
    description: 'taiyのサイトです。',
    path: '/',
  }),
} as const satisfies Metadata;

export default function IndexPage() {
  return (
    <CommonLayoutSimple>
      <div
        className={clsx(`
          grid
          min-h-dvh
          place-items-center
          px-4 pb-[max(15dvh,1.5rem)] pt-[max(5dvh,1.5rem)]
        `)}
      >
        <Profile inIndexPage />
      </div>
    </CommonLayoutSimple>
  );
}
