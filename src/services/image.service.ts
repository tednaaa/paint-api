import { IMAGES_PATH } from '../utils';
import path from 'path';
import fs from 'fs';

class ImageService {
  save(image: string, filename: string) {
    try {
      fs.writeFileSync(
        path.resolve(__dirname, IMAGES_PATH, `${filename}.jpg`),
        image,
        'base64'
      );
    } catch (error) {
      console.log(error);
    }
  }

  get(filename: string) {
    try {
      const file = fs.readFileSync(
        path.resolve(__dirname, IMAGES_PATH, `${filename}.jpg`)
      );
      const image = 'data:image/png;base64,' + file.toString('base64');

      return image;
    } catch (error) {
      console.log(error);
    }
  }
}

export const imageService = new ImageService();
