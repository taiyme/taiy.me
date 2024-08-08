import Profile from '@/features/Profile';
import { clsx } from '@/utils/clsx';

export default function CommonSidebar() {
  return (
    <header
      className={clsx(`
        sticky top-0
        row-span-2
        hidden
        h-dvh w-[30cqw]
        max-w-96
        overflow-y-hidden overflow-x-clip
        border-r
        @5xl/layout:block
      `)}
    >
      <div
        className={clsx(`
          grid
          size-full
          place-items-center
          overflow-y-auto overscroll-y-contain
          px-4 pb-[max(15dvh,1.5rem)] pt-[max(5dvh,1.5rem)]
        `)}
      >
        <Profile />
      </div>
    </header>
  );
}
