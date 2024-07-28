import { Controller, Get, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  findAll(@Query('limit') limit = 100, @Query('offset') offset = 50): string {
    return `This actions returns all categories limit:${limit}, offset:${offset}`;
  }
}
