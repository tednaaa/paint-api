import * as fs from 'fs';

export const createFileFromBase64 = (base64: string, filePath: string) => {
  const base64Data = base64.replace(/^data:image\/png;base64,/, '');

  fs.writeFileSync(filePath, base64Data, 'base64');
};
