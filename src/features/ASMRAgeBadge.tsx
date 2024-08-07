import { clsx } from '@/utils/clsx';

type ASMRAgeBadgeProps = Readonly<{
  type: 'general' | 'teen' | 'adult';
}>;

export default function ASMRAgeBadge({ type }: ASMRAgeBadgeProps) {
  return (
    <span
      role='img'
      aria-label={(
        type === 'adult' ? 'R-18指定'
          : type === 'teen' ? 'R-15指定'
            : '全年齢対象'
      )}
      className={clsx(`
        mr-1.5
        inline-block
        select-none
        rounded-[4px]
        p-1
        align-text-bottom
        text-xs font-bold leading-none
        text-white
      `, type === 'adult' ? 'bg-[#ff5f96]' : 'bg-[#82ca28]')}
    >
      {(
        type === 'adult' ? 'R-18'
          : type === 'teen' ? 'R-15'
            : '全年齢'
      )}
    </span>
  );
}
