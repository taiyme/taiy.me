type HttpUrl = `https://${string}` | `http://${string}`;

export function isValidHttpUrl(input: string): input is HttpUrl {
  try {
    const { protocol } = new URL(input);
    return protocol === 'https:' || protocol === 'http:';
  } catch {
    return false;
  }
}
