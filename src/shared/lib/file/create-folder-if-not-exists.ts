import * as fs from 'fs';

export const createFolderIfNotExists = (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath, { recursive: true });
  }
};
