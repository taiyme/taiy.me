import IconExternalLink from '@/components/IconExternalLink';
import ParseUrl from '@/components/ParseUrl';
import type { LinkBasePropsWithChildren } from '@/types/link';
import { generateLinkAttributes } from '@/utils/generateLinkAttributes';

type Props = Readonly<
  & LinkBasePropsWithChildren
  & {
    secondary?: boolean;
  }
>;

export default function LinkText({ children, secondary, ...linkProps }: Props) {
  const { linkAttrs, isExternalLink } = generateLinkAttributes(linkProps);

  return (
    <a
      {...linkAttrs}
      class={`
        group/LinkText rounded-[2px] text-blue-600
        [line-break:anywhere]
        focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:outline-hidden
        data-secondary:text-gray-500
      `}
      data-secondary={secondary || undefined}
      data-external={isExternalLink || undefined}
    >
      <span
        class={`
          group-data-external/LinkText:mr-[0.125em]
          group-hover-active-without-focus/LinkText:underline
        `}
      >
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
