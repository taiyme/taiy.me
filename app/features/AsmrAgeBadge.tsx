type Props = Readonly<{
  type: 'general' | 'teen' | 'adult';
}>;

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

  return (
    <span
      role='img'
      aria-label={ariaLabel}
      data-type={type === 'adult' ? 'adult' : 'general'}
      class={`
        mr-1.5 inline-block rounded-[4px] p-1 align-text-bottom text-xs leading-none font-bold text-white select-none
        data-[type=adult]:bg-[#ff5f96]
        data-[type=general]:bg-[#82ca28]
      `}
    >
      {displayLabel}
    </span>
  );
}
