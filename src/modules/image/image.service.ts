const path = require('path');
import { Injectable } from '@nestjs/common';
import {
  createFileFromBase64,
  createFolderIfNotExists,
  getBase64FromFile,
} from '@/shared/lib/file';
import { CreateImageDto } from './dto/create-image.dto';

@Injectable()
export class ImageService {
  private readonly folderPath = path.join(
    __dirname,
    '..',
    '..',
    'shared',
    'images',
  );

  create(createImageDto: CreateImageDto) {
    createFolderIfNotExists(this.folderPath);

    createFileFromBase64(
      createImageDto.image,
      path.join(this.folderPath, `${createImageDto.roomId}.jpg`),
    );
  }

  find(roomId: string) {
    const image = getBase64FromFile(
      path.join(this.folderPath, `${roomId}.jpg`),
    );

    return image;
  }
}
