export const sleep = async (ms: number) => {
  return new Promise<void>((resolve) => {
    window.setTimeout(() => resolve(), ms);
  });
};
