import type { Icon } from '@tabler/icons-react';
import { Link } from 'next-view-transitions';

import { clsx } from '@/utils/clsx';
import { generateAnchorProps, type LinkBaseProps } from '@/utils/generateAnchorProps';

type LinkIconProps = Readonly<
  & {
    icon: Icon;
  }
  & Omit<LinkBaseProps, 'children'>
>;

export default function LinkIcon({ icon: IconComponent, ...props }: LinkIconProps) {
  const { anchorProps } = generateAnchorProps(props);

  return (
    <Link
      {...anchorProps}
      className={clsx(`
        inline-flex
        rounded-full
        p-2
        outline-none outline-0
        hover:bg-black/5
        focus-visible:!bg-transparent focus-visible:outline-2 focus-visible:ring-2
        active:bg-black/5
        motion-safe:transition-colors
      `)}
    >
      <IconComponent
        role='img'
        aria-hidden='true'
        className='size-[1.75em] text-gray-500 opacity-80 @md/profile:size-8'
      />
    </Link>
  );
}
