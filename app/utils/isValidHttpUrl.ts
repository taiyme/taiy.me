import { safeURLParse } from '@/utils/safeURLParse';

type HttpUrl = `https://${string}` | `http://${string}`;

export function isValidHttpUrl(input: string): input is HttpUrl {
  const protocol = safeURLParse(input)?.protocol;

  return protocol === 'https:' || protocol === 'http:';
}
