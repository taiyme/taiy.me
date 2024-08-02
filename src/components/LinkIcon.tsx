import type { Icon } from '@tabler/icons-react';
import { Link } from 'next-view-transitions';

import { clsx } from '@/utils/clsx';
import { resolveUrl } from '@/utils/resolveUrl';

type LinkIconProps = Readonly<Pick<React.ComponentProps<typeof Link>, 'href' | 'aria-label'> & {
  icon: Icon;
}>;

export default function LinkIcon({ href, icon: IconComponent, ...props }: LinkIconProps) {
  const { isExternalUrl } = resolveUrl(href);

  return (
    <Link
      {...props}
      href={href}
      target={isExternalUrl ? '_blank' : undefined}
      rel={isExternalUrl ? 'noopener noreferrer' : undefined}
      className={clsx(`
        inline-flex
        rounded-full
        p-2
        outline-none
        transition-colors
        hover:bg-black/5
        focus-visible:!bg-transparent focus-visible:ring-2
        active:bg-black/5
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
