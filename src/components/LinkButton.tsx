import { IconChevronRight, IconExternalLink } from '@tabler/icons-react';
import { Link } from 'next-view-transitions';

import { clsx } from '@/utils/clsx';
import { generateAnchorProps, type LinkBaseProps } from '@/utils/generateAnchorProps';

type LinkButtonProps = LinkBaseProps;

export default function LinkButton(props: LinkButtonProps) {
  const { anchorProps, children, isExternalUrl } = generateAnchorProps(props);

  return (
    <Link
      {...anchorProps}
      className={clsx(`
        group/linkButton
        inline-grid grid-flow-col items-center gap-1
        rounded-full border
        border-black/5 bg-transparent
        px-2.5 py-1.5
        text-sm
        outline-none outline-0
        hover:border-transparent hover:bg-black/5
        focus-visible:!border-transparent focus-visible:!bg-transparent focus-visible:outline-2 focus-visible:ring-2
        active:border-transparent active:bg-black/5
        motion-safe:transition-colors
      `)}
    >
      <span className='truncate'>{children}</span>
      {isExternalUrl ? (
        <IconExternalLink
          role='img'
          aria-hidden='true'
          className='size-[1em] text-gray-500 opacity-80'
        />
      ) : (
        <IconChevronRight
          role='img'
          aria-hidden='true'
          className={clsx(`
            m-[-0.2em]
            size-[1.2em]
            text-gray-500 opacity-80
            motion-safe:group-hover/linkButton:animate-[bounceRight_2s_infinite]
            motion-safe:group-focus-visible/linkButton:animate-[bounceRight_2s_infinite]
            motion-safe:group-active/linkButton:animate-[bounceRight_2s_infinite]
          `)}
        />
      )}
    </Link>
  );
}
