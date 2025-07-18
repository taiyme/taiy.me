import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { tv } from 'tailwind-variants';

import type { HeadingTextProps } from '@/types/HeadingText';

const slots = tv({
  slots: {
    headingStyle: 'font-bold',
  },
  variants: {
    level: {
      1: {
        // eslint-disable-next-line better-tailwindcss/enforce-consistent-line-wrapping
        headingStyle: 'mb-4 text-2xl @xl:text-3xl',
      },
      2: {
        // eslint-disable-next-line better-tailwindcss/enforce-consistent-line-wrapping
        headingStyle: 'text-lg @xl:text-xl',
      },
    },
  },
});

type Props = Readonly<
  & HeadingTextProps
  & SetRequired<
    VariantProps<typeof slots>,
    | 'level'
  >
>;

export default function HeadingText({ children, level }: Props) {
  const XHeading = `h${level}` as const;

  const { headingStyle } = slots({ level });

  return (
    <XHeading class={headingStyle()}>
      {children}
    </XHeading>
  );
}
