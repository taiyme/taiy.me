import type { Link } from 'next-view-transitions';

import { omitUndefined } from '@/utils/omitUndefined';
import { resolveUrl } from '@/utils/resolveUrl';

type GenerateAnchorPropsProps = Readonly<
  & Pick<React.ComponentProps<typeof Link>, 'href'>
  & {
    sponsored?: boolean;
  }
>;

type GenerateAnchorPropsResult = Readonly<
  & {
    anchorProps: Pick<React.ComponentProps<typeof Link>, 'href' | 'rel' | 'target'>;
  }
  & ReturnType<typeof resolveUrl>
>;

export const generateAnchorProps = ({ href, sponsored }: GenerateAnchorPropsProps) => {
  const { resolvedUrl, isExternalUrl } = resolveUrl(href);
  const rel = (
    isExternalUrl
      ? (sponsored ? 'noopener sponsored' : 'noopener noreferrer')
      : (sponsored ? 'sponsored' : undefined)
  );
  const target = isExternalUrl ? '_blank' : undefined;

  return {
    anchorProps: omitUndefined({ href, rel, target } as const),
    resolvedUrl,
    isExternalUrl,
  } as const satisfies GenerateAnchorPropsResult;
};

export type LinkBaseProps = Readonly<
  & Pick<React.ComponentProps<typeof Link>, 'children' | 'href' | 'aria-label'>
  & GenerateAnchorPropsProps
>;
