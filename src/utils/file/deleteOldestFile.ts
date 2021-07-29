import { unlinkSync } from 'fs';
import path from 'path';
import { getFileBirthtimeMs } from './getFileBirthtimeMs';
import { getOldestFileBirthtimeMs } from './getOldestFileBirthtimeMs';

export const deleteOldestFile = (directoryPath: string, files: string[]) => {
  const oldestFileBirthtimeMs = getOldestFileBirthtimeMs(directoryPath, files);

  files.forEach((file) => {
    const fileBirthtimeMs = getFileBirthtimeMs(directoryPath, file);

    if (fileBirthtimeMs === oldestFileBirthtimeMs) {
      return unlinkSync(path.join(directoryPath, file));
    }
  });
};
