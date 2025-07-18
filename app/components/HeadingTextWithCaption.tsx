import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { tv } from 'tailwind-variants';

import type { HeadingTextWithCaptionProps } from '@/types/HeadingText';
import HeadingText from '@/components/HeadingText';

const slots = tv({
  slots: {
    // eslint-disable-next-line better-tailwindcss/enforce-consistent-line-wrapping
    groupingStyle: 'flex flex-wrap items-baseline gap-x-2 *:mb-0',
    captionStyle: 'text-gray-500',
  },
  variants: {
    level: {
      1: {
        groupingStyle: 'mb-4',
        // eslint-disable-next-line better-tailwindcss/enforce-consistent-line-wrapping
        captionStyle: 'text-base @xl:text-lg',
      },
      2: {
        // eslint-disable-next-line better-tailwindcss/enforce-consistent-line-wrapping
        captionStyle: 'text-xs @xl:text-sm',
      },
    },
  },
});

type Props = Readonly<
  & HeadingTextWithCaptionProps
  & SetRequired<
    VariantProps<typeof slots>,
    | 'level'
  >
>;

export default function HeadingTextWithCaption({ heading, caption, level }: Props) {
  const { groupingStyle, captionStyle } = slots({ level });

  return (
    <hgroup class={groupingStyle()}>
      <HeadingText level={level}>
        {heading}
      </HeadingText>
      <p class={captionStyle()}>
        {caption}
      </p>
    </hgroup>
  );
}
