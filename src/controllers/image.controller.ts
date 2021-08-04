import { Request, Response } from 'express';
import { readdirSync } from 'fs';
import { IImageRequestBody, IImageRequestQuery } from '../interfaces';
import { imageService } from '../services';
import { deleteOldestFile, IMAGES_PATH } from '../utils';

class ImageController {
  save(
    request: Request<null, null, IImageRequestBody, IImageRequestQuery>,
    response: Response
  ) {
    const image = request.body.image.replace('data:image/png;base64,', '');
    const filename = request.query.id;

    imageService.save(image, filename);

    const files = readdirSync(IMAGES_PATH);
    const maxImagesCount = 10;

    if (files.length > maxImagesCount) {
      deleteOldestFile(IMAGES_PATH, files);
    }

    return response.status(200).json({ message: 'loaded' });
  }

  get(
    request: Request<null, null, IImageRequestBody, IImageRequestQuery>,
    response: Response
  ) {
    const filename = request.query.id;
    const image = imageService.get(filename);

    return response.json({ image });
  }
}

export const imageController = new ImageController();
