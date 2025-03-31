import type { Child } from 'hono/jsx';

type Props = Readonly<{
  label: Child;
  description: Child;
}>;

export default function AboutCard({ label, description }: Props) {
  return (
    <div class='grid grid-cols-1 grid-rows-[auto_1fr] gap-1 rounded-2xl border border-gray-200 px-4 py-2.5'>
      <div class='flex flex-wrap items-center gap-x-2'>
        {label}
      </div>
      <div class='text-sm text-gray-500'>
        {description}
      </div>
    </div>
  );
}
