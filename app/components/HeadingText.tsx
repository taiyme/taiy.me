import { tv, type VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';

import type { Heading } from '@/types/Heading';

const slots = tv({
  slots: {
    hgroupStyle: 'flex flex-wrap items-baseline gap-x-2',
    headingStyle: 'font-bold',
    captionStyle: 'leading-relaxed text-gray-500',
  },
  variants: {
    level: {
      1: {
        hgroupStyle: 'mb-4',
        headingStyle: `
          text-2xl
          @xl:text-3xl
        `,
        captionStyle: '',
      },
      2: {
        hgroupStyle: '',
        headingStyle: `
          text-lg
          @xl:text-xl
        `,
        captionStyle: 'text-sm',
      },
    },
  },
});

type Props = Readonly<
  & Heading
  & SetRequired<
    VariantProps<typeof slots>,
    | 'level'
  >
>;

export default function HeadingText({ children, heading, caption, level }: Props) {
  const XHeading = `h${level}` as const;

  const { hgroupStyle, headingStyle, captionStyle } = slots({ level });

  return (
    <hgroup class={hgroupStyle()}>
      <XHeading class={headingStyle()}>
        {children ?? heading}
      </XHeading>
      {caption && (
        <p class={captionStyle()}>
          {caption}
        </p>
      )}
    </hgroup>
  );
}
