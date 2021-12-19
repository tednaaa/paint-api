import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto, FindImageDto } from './dto/image.dto';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imageService.create(createImageDto);
  }

  @Get(':roomId')
  find(@Param() findImageDto: FindImageDto) {
    return this.imageService.find(findImageDto);
  }
}
