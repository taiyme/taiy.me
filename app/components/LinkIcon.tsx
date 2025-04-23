import type { FC, JSX } from 'hono/jsx';

import type { LinkBaseProps } from '@/types/link';
import { generateLinkAttributes } from '@/utils/generateLinkAttributes';

type Props = Readonly<
  & LinkBaseProps
  & {
    icon: FC<JSX.HTMLAttributes>;
  }
>;

export default function LinkIcon({ icon: IconComponent, ...linkProps }: Props) {
  const { linkAttrs } = generateLinkAttributes(linkProps);

  return (
    <a
      {...linkAttrs}
      class={`
        inline-grid rounded-full p-2
        focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:outline-hidden
        motion-safe:transition-colors
        hover-active-without-focus:bg-black/5
      `}
    >
      <IconComponent
        class={`
          size-[1.75em] text-gray-500 opacity-80
          @md/profile:size-8
        `}
      />
    </a>
  );
}
