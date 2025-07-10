export function safeURLParse(url: string | URL, base?: string | URL) {
  if (('parse' in URL) as boolean /* type widening */) {
    return URL.parse(url, base);
  }

  try {
    return new URL(url, base);
  } catch {
    return null;
  }
}
