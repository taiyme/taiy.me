import type { Link } from '@/types/Link';
import { omitUndefined } from '@/utils/omitUndefined';

export function generateLinkAttributes<T extends Link>(
  {
    to: internalHref,
    href: externalHref,
    external = false,
    author = false,
    me = false,
    sponsored = false,
    privacyPolicy = false,
    ...rest
  }: T,
) {
  const target = external ? '_blank' : undefined;
  const rel = Object.entries({
    noopener: external,
    noreferrer: external && !sponsored,
    external,
    author,
    me,
    sponsored,
    'privacy-policy': privacyPolicy,
  }).flatMap(([k, v]) => (v ? [k] : [])).join(' ') || undefined;

  return {
    linkAttrs: {
      ...rest,
      ...omitUndefined({ rel, target }),
      href: internalHref ?? externalHref,
    },
    isExternalLink: external,
  } as const;
}
