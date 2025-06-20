import type { PropsWithChildren } from 'hono/jsx';

type Props = Readonly<
  PropsWithChildren
>;

export default function ZenLayout({ children }: Props) {
  return (
    <main
      class='mx-auto grid min-h-dvh w-full max-w-3xl grid-cols-1 grid-rows-1 overflow-clip'
    >
      <div
        class='@container size-full px-4 py-[max(5dvh,1.5rem)]'
      >
        {children}
      </div>
    </main>
  );
}
