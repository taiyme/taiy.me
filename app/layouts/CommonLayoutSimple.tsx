import type { PropsWithChildren } from 'hono/jsx';

type Props = Readonly<
  PropsWithChildren
>;

export default function CommonLayoutSimple({ children }: Props) {
  return (
    <main class='min-h-dvh w-full overflow-clip'>
      <div class='@container/page min-h-dvh w-full'>
        {children}
      </div>
    </main>
  );
}
