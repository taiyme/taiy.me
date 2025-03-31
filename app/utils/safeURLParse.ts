export function safeURLParse(url: string | URL, base?: string | URL) {
  try {
    return new URL(url, base);
  } catch {
    return null;
  }
}
