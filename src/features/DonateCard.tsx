import { clsx } from '@/utils/clsx';

type DonateCardProps = Readonly<{
  label: React.ReactNode;
  description: React.ReactNode;
  recommended?: boolean;
}>;

export default function DonateCard({ label, description, recommended }: DonateCardProps) {
  return (
    <div
      className={clsx(`
        grid grid-cols-1 grid-rows-[auto_1fr] gap-1
        rounded-2xl border
        px-4 py-2.5
      `)}
    >
      <div className='flex flex-wrap items-center gap-x-2'>
        {label}
        {recommended && (
          <span
            className={clsx(`
              inline-block
              rounded-md
              bg-gradient-to-br from-lime-200 to-red-100
              px-1 py-0.5
              text-xs
            `)}
          >
            おすすめ
          </span>
        )}
      </div>
      <div className='text-sm text-gray-500'>
        {description}
      </div>
    </div>
  );
}
