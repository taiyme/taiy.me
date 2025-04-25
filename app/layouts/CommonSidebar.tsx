import Profile from '@/features/Profile';

export default function CommonSidebar() {
  return (
    <header
      class={`
        sticky top-0 row-span-2 hidden h-dvh w-[30cqw] max-w-96 overflow-x-clip overflow-y-hidden
        @5xl/layout:block
      `}
    >
      <div
        class={`
          grid size-full place-items-center overflow-y-auto overscroll-y-contain px-4 pt-[max(5dvh,1.5rem)]
          pb-[max(15dvh,1.5rem)]
        `}
      >
        <Profile />
      </div>
    </header>
  );
}
