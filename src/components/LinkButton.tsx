import { IconChevronRight, IconExternalLink } from '@tabler/icons-react';
import { Link } from 'next-view-transitions';

import { clsx } from '@/utils/clsx';
import { resolveUrl } from '@/utils/resolveUrl';

type LinkButtonProps = Readonly<Pick<React.ComponentProps<typeof Link>, 'children' | 'href' | 'aria-label'>>;

export default function LinkButton({ children, href, ...props }: LinkButtonProps) {
  const { isExternalUrl } = resolveUrl(href);

  return (
    <Link
      {...props}
      href={href}
      target={isExternalUrl ? '_blank' : undefined}
      rel={isExternalUrl ? 'noopener noreferrer' : undefined}
      className={clsx(`
        group/linkButton
        inline-grid grid-flow-col items-center gap-1
        rounded-full border
        border-black/5 bg-transparent
        px-2.5 py-1.5
        text-sm
        outline-none
        transition-colors
        hover:border-transparent hover:bg-black/5
        focus-visible:!border-transparent focus-visible:!bg-transparent focus-visible:ring-2
        active:border-transparent active:bg-black/5
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
            group-hover/linkButton:animate-[bounceRight_2s_infinite]
            group-focus-visible/linkButton:animate-[bounceRight_2s_infinite]
            group-active/linkButton:animate-[bounceRight_2s_infinite]
          `)}
        />
      )}
    </Link>
  );
}
