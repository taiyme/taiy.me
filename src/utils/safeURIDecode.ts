export const safeURIDecode = (str: string) => {
  try {
    return decodeURIComponent(str);
  } catch {
    return str;
  }
};
