import { clsx } from '@/utils/clsx';

type GridProps = Readonly<React.PropsWithChildren>;

export default function Grid({ children }: GridProps) {
  return (
    <div
      className={clsx(`
        grid grid-cols-1 gap-4
        @xs/page:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]
      `)}
    >
      {children}
    </div>
  );
}
