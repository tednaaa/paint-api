import * as fs from 'fs';

export const getBase64FromFile = (filePath: string): string | null => {
  if (fs.existsSync(filePath)) {
    const file = fs.readFileSync(filePath);
    const base64 = 'data:image/png;base64,' + file.toString('base64');

    return base64;
  }

  return null;
};
