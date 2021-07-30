import { statSync } from 'fs';
import path from 'path';

export const getFileBirthtimeMs = (
  directoryPath: string,
  file: string
): number => {
  return statSync(path.join(directoryPath, file)).birthtimeMs;
};
