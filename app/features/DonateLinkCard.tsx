import type { Child } from 'hono/jsx';

import IconChevronRight from '@/components/IconChevronRight';
import IconExternalLink from '@/components/IconExternalLink';
import type { LinkProps } from '@/types/Link';
import { generateLinkAttributes } from '@/utils/generateLinkAttributes';

type Props = Readonly<
  & LinkProps
  & {
    label: NonNullable<Child>;
    description: NonNullable<Child>;
    recommended?: boolean;
  }
>;

export default function DonateLinkCard({ label, description, recommended, ...linkProps }: Props) {
  const { linkAttrs, isExternalLink } = generateLinkAttributes(linkProps);

  return (
    <a
      {...linkAttrs}
      class={`
        group/DonateCard grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-1 rounded-2xl border border-gray-200 px-4
        py-2.5 u-focus-ring
        motion-safe:transition-colors
        hover-active-without-focus:bg-black/5
        hover-focus-active:border-transparent
      `}
    >
      <div class='col-span-2 flex flex-wrap items-center gap-x-2'>
        {label}
        {recommended && (
          <span
            class={`
              inline-block rounded-md bg-gradient-to-br from-lime-200 to-red-100 px-1 py-0.5 text-xs
              group-hover-active-without-focus/DonateCard:opacity-80
              motion-safe:transition-opacity
            `}
          >
            おすすめ
          </span>
        )}
      </div>
      <div class='text-sm text-gray-500'>
        {description}
      </div>
      <div class='flex items-end'>
        {isExternalLink ? (
          <IconExternalLink
            class='size-[1.2em] text-gray-500 opacity-80'
          />
        ) : (
          <IconChevronRight
            class={`
              size-[1.2em] text-gray-500 opacity-80
              motion-safe:group-hover-focus-active/DonateCard:animate-bounce-right
            `}
          />
        )}
      </div>
    </a>
  );
}
