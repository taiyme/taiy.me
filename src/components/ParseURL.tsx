import { toUnicode } from 'punycode';

import { safeURIDecode } from '@/utils/safeURIDecode';

type ParseURLProps = Readonly<{
  url: URL;
}>;

export default function ParseURL({ url }: ParseURLProps) {
  const isHttp = url.protocol === 'https:' || url.protocol === 'http:';

  if (!isHttp) return (
    <span>{url.href}</span>
  );

  return (
    <span>
      <span>{`${url.protocol}//`}</span>
      <span className='font-bold'>{toUnicode(url.hostname)}</span>
      {url.port !== '' && <span>{`:${url.port}`}</span>}
      <span>{safeURIDecode(url.pathname)}</span>
      {url.search !== '' && <span>{safeURIDecode(url.search)}</span>}
      {url.hash !== '' && <span className='italic'>{safeURIDecode(url.hash)}</span>}
    </span>
  );
}
