import { statSync } from 'fs';
import path from 'path';

export const getFileBirthtimeMs = (directoryPath: string, file: string) => {
  return statSync(path.join(directoryPath, file)).birthtimeMs;
};
