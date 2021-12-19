import * as fs from 'fs';
import * as path from 'path';

export const removeOldestFile = (folderPath: string) => {
  const filesInFolder = fs.readdirSync(folderPath);

  let oldestFile = {
    fileName: null,
    lastUpdatedTimeMs: null,
  };

  filesInFolder.forEach((fileName: string) => {
    const LastFileUpdatedTimeMs = fs.statSync(
      path.join(folderPath, fileName),
    ).ctimeMs;

    if (
      oldestFile.lastUpdatedTimeMs > LastFileUpdatedTimeMs ||
      oldestFile.lastUpdatedTimeMs === null
    ) {
      oldestFile = {
        fileName: fileName,
        lastUpdatedTimeMs: LastFileUpdatedTimeMs,
      };
    }
  });

  fs.rmSync(path.join(folderPath, oldestFile.fileName));
};
