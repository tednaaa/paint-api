import { getFileBirthtimeMs } from './getFileBirthtimeMs';

export const getOldestFileBirthtimeMs = (
  directoryPath: string,
  files: string[]
): number => {
  return Math.min(
    ...files.map((file) => {
      const fileBirthtimeMs = getFileBirthtimeMs(directoryPath, file);

      return fileBirthtimeMs;
    })
  );
};
