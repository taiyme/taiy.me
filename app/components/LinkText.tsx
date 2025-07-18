import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

import type { LinkWithChildrenProps } from '@/types/Link';
import IconExternalLink from '@/components/IconExternalLink';
import ParseUrl from '@/components/ParseUrl';
import { generateLinkAttributes } from '@/utils/generateLinkAttributes';

const slots = tv({
  slots: {
    anchorStyle: `
      group/LinkText rounded-[2px] u-focus-ring
      [line-break:anywhere]
    `,
    textStyle: 'group-hover-active-without-focus/LinkText:underline',
  },
  variants: {
    variant: {
      primary: {
        anchorStyle: 'text-blue-600',
      },
      secondary: {
        anchorStyle: 'text-gray-500',
      },
    },
    external: {
      true: {
        textStyle: 'mr-[0.125em]',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type Props = Readonly<
  & LinkWithChildrenProps
  & Pick<
    VariantProps<typeof slots>,
    | 'variant'
  >
>;

export default function LinkText({ children, variant, ...linkProps }: Props) {
  const { linkAttrs, isExternalLink } = generateLinkAttributes(linkProps);

  const { anchorStyle, textStyle } = slots({
    variant,
    external: isExternalLink,
  });

  return (
    <a
      {...linkAttrs}
      class={anchorStyle()}
    >
      <span class={textStyle()}>
        {children ?? <ParseUrl href={linkAttrs.href} />}
      </span>
      {isExternalLink && (
        <IconExternalLink
          class='mt-[-0.125em] mr-[0.125em] inline size-[0.85em] align-middle text-current'
        />
      )}
    </a>
  );
}
