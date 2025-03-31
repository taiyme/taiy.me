import Profile from '@/features/Profile';
import type { Metadata } from '@/types/metadata';

export const metadata = {
  path: '/',
  title: 'taiy.me',
  description: 'taiyのサイトです。',
  layoutType: 'commonSimple',
} as const satisfies Metadata;

export default function Page() {
  return (
    <div class='grid min-h-dvh w-full place-items-center px-4 pt-[max(5dvh,1.5rem)] pb-[max(15dvh,1.5rem)]'>
      <Profile />
    </div>
  );
}
