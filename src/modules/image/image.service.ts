import * as path from 'path';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import {
  createFileFromBase64,
  createFolderIfNotExists,
  getBase64FromFile,
  removeOldestFile,
} from '@/shared/lib/file';
import { CreateImageDto, FindImageDto } from './dto/image.dto';

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

    const imagesFolder = fs.readdirSync(this.folderPath);
    const roomsCount = imagesFolder.length;
    const maxRoomsCount = 10;

    if (roomsCount >= maxRoomsCount) removeOldestFile(this.folderPath);

    createFileFromBase64(
      createImageDto.image,
      path.join(this.folderPath, `${createImageDto.roomId}.jpg`),
    );
  }

  find(findImageDto: FindImageDto) {
    const image = getBase64FromFile(
      path.join(this.folderPath, `${findImageDto.roomId}.jpg`),
    );

    return image;
  }
}
