import type { Link } from 'next-view-transitions';

import { omitUndefined } from '@/utils/omitUndefined';
import { resolveUrl } from '@/utils/resolveUrl';

type AnchorProps = Readonly<
  Pick<
    React.ComponentProps<typeof Link>,
    | 'href'
    | 'aria-label'
  >
>;

type GenerateAnchorPropsProps = Readonly<
  & AnchorProps
  & Pick<React.ComponentProps<typeof Link>, 'children'>
  & {
    author?: boolean;
    me?: boolean;
    sponsored?: boolean;
  }
>;

type GenerateAnchorPropsResult = Readonly<
  & {
    anchorProps: AnchorProps;
  }
  & Pick<React.ComponentProps<typeof Link>, 'children'>
  & ReturnType<typeof resolveUrl>
>;

export const generateAnchorProps = <T extends GenerateAnchorPropsProps>({ children, href, author, me, sponsored, ...props }: T) => {
  const { resolvedUrl, isExternalUrl } = resolveUrl(href);
  const rel = Object.entries(({
    noopener: isExternalUrl,
    noreferrer: isExternalUrl && !sponsored,
    external: isExternalUrl,
    author,
    me,
    sponsored,
  })).flatMap(([k, v]) => v ? [k] : []).join(' ') || undefined;
  const target = isExternalUrl ? '_blank' : undefined;

  return {
    anchorProps: {
      ...props,
      ...omitUndefined({ rel, target }),
      href,
    },
    children,
    resolvedUrl,
    isExternalUrl,
  } as const satisfies GenerateAnchorPropsResult;
};

export type LinkBaseProps = GenerateAnchorPropsProps;
