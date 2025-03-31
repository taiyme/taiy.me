import type { PropsWithChildren } from 'hono/jsx';

type Props = Readonly<
  PropsWithChildren
>;

export default function PageGrid({ children }: Props) {
  return (
    <div
      class={`
        grid grid-cols-1 gap-4
        @xs/page:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]
      `}
    >
      {children}
    </div>
  );
}
