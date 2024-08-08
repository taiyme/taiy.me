import { IconExternalLink } from '@tabler/icons-react';
import { Link } from 'next-view-transitions';

import ParseURL from '@/components/ParseURL';
import { clsx } from '@/utils/clsx';
import { generateAnchorProps, type LinkBaseProps } from '@/utils/generateAnchorProps';

type LinkTextProps = LinkBaseProps;

export default function LinkText({ children, href, sponsored, ...props }: LinkTextProps) {
  const { anchorProps, resolvedUrl, isExternalUrl } = generateAnchorProps({ href, sponsored });

  return (
    <Link
      {...props}
      {...anchorProps}
      className={clsx(`
        group/linkText
        rounded-[2px]
        text-blue-500
        outline-none
        [line-break:anywhere]
        focus-visible:ring-2
      `)}
    >
      <span
        className={clsx(`
          group-hover/linkText:underline
          group-focus-visible/linkText:!no-underline
          group-active/linkText:underline
        `, {
          'mr-[0.125em]': isExternalUrl,
        })}
      >
        {children ?? <ParseURL url={resolvedUrl} />}
      </span>
      {isExternalUrl && (
        <IconExternalLink
          role='img'
          aria-hidden='true'
          className={clsx(`
            mr-[0.125em]
            mt-[-0.125em]
            inline
            size-[0.85em]
            align-middle
            text-blue-500
          `)}
        />
      )}
    </Link>
  );
}
