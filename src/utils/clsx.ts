type ClsxValue = string | number | bigint | null | boolean | undefined | ClsxArray | ClsxObject;
type ClsxObject = Record<string, boolean | null | undefined>;
type ClsxArray = ClsxValue[] | readonly ClsxValue[];

const toFlatValue = (input: ClsxValue): string[] => {
  if (typeof input === 'string') {
    if (input === '') return [];
    return input.split(/\s+/g).filter((v) => v !== '');
  }
  if (Array.isArray(input)) {
    if (input.length === 0) return [];
    return input.flatMap(toFlatValue);
  }
  if (typeof input === 'object') {
    if (input == null) return [];
    return Object.entries(input).flatMap(([k, v]) => {
      if (!v) return [];
      return toFlatValue(k);
    });
  }
  return [];
};

export const clsx = (...inputs: ClsxValue[]) => {
  return Array.from(new Set(inputs.flatMap(toFlatValue))).join(' ');
};
