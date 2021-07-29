import { Request, Response } from 'express';
import { IImageRequestBody, IImageRequestQuery } from '../interfaces';
import { imageService } from './image.service';

class ImageController {
  save(
    request: Request<null, null, IImageRequestBody, IImageRequestQuery>,
    response: Response
  ) {
    const image = request.body.image.replace('data:image/png;base64,', '');
    const filename = request.query.id;

    imageService.save(image, filename);

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
