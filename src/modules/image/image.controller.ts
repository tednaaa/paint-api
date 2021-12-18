import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imageService.create(createImageDto);
  }

  @Get(':roomId')
  find(@Param('roomId') roomId: string) {
    return this.imageService.find(roomId);
  }
}
