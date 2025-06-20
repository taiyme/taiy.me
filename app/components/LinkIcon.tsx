import type { FC, JSX } from 'hono/jsx';

import type { Link } from '@/types/Link';
import { generateLinkAttributes } from '@/utils/generateLinkAttributes';

type Props = Readonly<
  & Link
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
        inline-grid rounded-full p-2 u-focus-ring
        motion-safe:transition-colors
        hover-active-without-focus:bg-black/5
      `}
    >
      <IconComponent
        class={`
          size-[1.75em] text-gray-500 opacity-80
          @md:size-[2em]
        `}
      />
    </a>
  );
}
