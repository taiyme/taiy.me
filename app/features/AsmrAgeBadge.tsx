import { tv, type VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';

const slots = tv({
  slots: {
    badgeStyle: 'mr-1.5 inline-block rounded-[4px] p-1 align-text-bottom text-xs/none font-bold text-white select-none',
  },
  variants: {
    type: {
      general: {
        badgeStyle: 'bg-[#82ca28]',
      },
      teen: {
        badgeStyle: 'bg-[#82ca28]',
      },
      adult: {
        badgeStyle: 'bg-[#ff5f96]',
      },
    },
  },
});

type Props = Readonly<
  SetRequired<
    VariantProps<typeof slots>,
    | 'type'
  >
>;

export default function AsmrAgeBadge({ type }: Props) {
  const { ariaLabel, displayLabel } = (() => {
    switch (type) {
      case 'general':
        return {
          ariaLabel: '全年齢対象',
          displayLabel: '全年齢',
        } as const;
      case 'teen':
        return {
          ariaLabel: 'R-15対象',
          displayLabel: 'R-15',
        } as const;
      case 'adult':
        return {
          ariaLabel: 'R-18対象',
          displayLabel: 'R-18',
        } as const;
    }
  })();

  const { badgeStyle } = slots({ type });

  return (
    <span
      role='img'
      aria-label={ariaLabel}
      class={badgeStyle()}
    >
      {displayLabel}
    </span>
  );
}
