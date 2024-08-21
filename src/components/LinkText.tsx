import { IconExternalLink } from '@tabler/icons-react';
import { Link } from 'next-view-transitions';

import ParseURL from '@/components/ParseURL';
import { clsx } from '@/utils/clsx';
import { generateAnchorProps, type LinkBaseProps } from '@/utils/generateAnchorProps';

type LinkTextProps = LinkBaseProps;

export default function LinkText(props: LinkTextProps) {
  const { anchorProps, children, resolvedUrl, isExternalUrl } = generateAnchorProps(props);

  return (
    <Link
      {...anchorProps}
      className={clsx(`
        group/linkText
        rounded-[2px]
        text-blue-500
        outline-none outline-0
        [line-break:anywhere]
        focus-visible:outline-2 focus-visible:ring-2
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
