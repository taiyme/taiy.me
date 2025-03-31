import type { Child } from 'hono/jsx';

type Props = Readonly<{
  label: NonNullable<Child>;
  description: NonNullable<Child>;
  recommended?: boolean;
}>;

export default function DonateCard({ label, description, recommended }: Props) {
  return (
    <div class='grid grid-cols-1 grid-rows-[auto_1fr] gap-1 rounded-2xl border border-gray-200 px-4 py-2.5'>
      <div class='flex flex-wrap items-center gap-x-2'>
        {label}
        {recommended && (
          <span class='inline-block rounded-md bg-gradient-to-br from-lime-200 to-red-100 px-1 py-0.5 text-xs'>
            おすすめ
          </span>
        )}
      </div>
      <div class='text-sm text-gray-500'>
        {description}
      </div>
    </div>
  );
}
