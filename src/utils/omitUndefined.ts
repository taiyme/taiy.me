export const omitUndefined = <
  T extends Record<PropertyKey, unknown>,
>(obj: T) => {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined)) as T;
};
