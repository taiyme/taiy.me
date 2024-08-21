import { clsx } from '@/utils/clsx';

type AboutCardProps = Readonly<{
  label: React.ReactNode;
  description: React.ReactNode;
}>;

export default function AboutCard({ label, description }: AboutCardProps) {
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
      </div>
      <div className='text-sm text-gray-500'>
        {description}
      </div>
    </div>
  );
}
