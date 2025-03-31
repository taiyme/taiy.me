import { toUnicode } from 'punycode.js';

import { SITE_BASE_URL } from '@/constants/site';
import { safeURIDecode } from '@/utils/safeURIDecode';
import { safeURLParse } from '@/utils/safeURLParse';

type Props = Readonly<{
  href: string | URL;
}>;

export default function ParseUrl({ href }: Props) {
  const url = safeURLParse(href, SITE_BASE_URL);
  const isHttp = url?.protocol === 'https:' || url?.protocol === 'http:';

  if (isHttp) {
    return (
      <>
        {url.protocol !== '' && (
          `${url.protocol}//`
        )}
        {url.hostname !== '' && (
          <span class='font-bold'>{toUnicode(url.hostname)}</span>
        )}
        {url.port !== '' && (
          `:${url.port}`
        )}
        {url.pathname !== '' && (
          safeURIDecode(url.pathname)
        )}
        {url.search !== '' && (
          safeURIDecode(url.search)
        )}
        {url.hash !== '' && (
          <span class='italic'>{safeURIDecode(url.hash)}</span>
        )}
      </>
    );
  }

  return (
    <span>
      {url?.href ?? href}
    </span>
  );
}
