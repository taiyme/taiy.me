import IconChevronRight from '@/components/IconChevronRight';
import IconExternalLink from '@/components/IconExternalLink';
import type { LinkWithChildren } from '@/types/Link';
import { generateLinkAttributes } from '@/utils/generateLinkAttributes';

type Props = Readonly<
  LinkWithChildren
>;

export default function LinkButton({ children, ...linkProps }: Props) {
  const { linkAttrs, isExternalLink } = generateLinkAttributes(linkProps);

  return (
    <a
      {...linkAttrs}
      class={`
        group/LinkButton inline-grid grid-flow-col items-center gap-1 rounded-full border border-gray-200 px-2.5 py-1.5
        text-sm u-focus-ring
        motion-safe:transition-colors
        hover-active-without-focus:bg-black/5
        hover-focus-active:border-transparent
      `}
    >
      <span class='truncate'>{children}</span>
      {isExternalLink ? (
        <IconExternalLink
          class='size-[1em] text-gray-500 opacity-80'
        />
      ) : (
        <IconChevronRight
          class={`
            m-[-0.2em] size-[1.2em] text-gray-500 opacity-80
            motion-safe:group-hover-focus-active/LinkButton:animate-bounce-right
          `}
        />
      )}
    </a>
  );
}
