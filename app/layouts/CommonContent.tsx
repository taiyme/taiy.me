import type { PropsWithChildren } from 'hono/jsx';

type Props = Readonly<
  PropsWithChildren
>;

export default function CommonContent({ children }: Props) {
  return (
    <div
      class={`
        @container size-full px-4 pt-[max(5dvh,1.5rem)] pb-[calc(max(5dvh,1.5rem)/2)]
        @5xl:pb-[max(5dvh,1.5rem)] @5xl:[view-transition-name:layout-content]
      `}
    >
      {children}
    </div>
  );
}
