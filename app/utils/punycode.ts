import { toAscii, toUnicode } from 'idna-uts46-hx';

export function domainToASCII(domain: string) {
  return toAscii(domain) || domain;
}

export function domainToUnicode(domain: string) {
  return toUnicode(domain) || domain;
}
