import type { Metadata } from '@/types/Metadata';
import IntroProfile from '@/features/IntroProfile';

export const metadata = {
  title: 'taiy.me',
  description: 'taiyのサイトです。',
  layoutType: 'zen',
} as const satisfies Metadata;

export default function Page() {
  return (
    <div
      class='grid size-full place-items-center'
    >
      <IntroProfile semantics />
    </div>
  );
}
