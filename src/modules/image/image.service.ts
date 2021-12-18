import * as path from 'path';
import * as fs from 'fs';
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

    const imagesFolder = fs.readdirSync(this.folderPath);
    const roomsCount = imagesFolder.length;
    const maxRoomsCount = 10;

    if (roomsCount >= maxRoomsCount) {
      let oldestImage = {
        imageName: null,
        lastUpdatedTimeMs: null,
      };

      imagesFolder.forEach((imageName: string) => {
        const imageLastUpdatedTimeMs = fs.statSync(
          path.join(this.folderPath, imageName),
        ).ctimeMs;

        if (
          oldestImage.lastUpdatedTimeMs > imageLastUpdatedTimeMs ||
          oldestImage.lastUpdatedTimeMs === null
        ) {
          oldestImage = {
            imageName,
            lastUpdatedTimeMs: imageLastUpdatedTimeMs,
          };
        }
      });

      fs.rmSync(path.join(this.folderPath, oldestImage.imageName));
    }

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
