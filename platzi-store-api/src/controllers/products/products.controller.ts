import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  filter(): string {
    return 'This action return products/filters1';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action return products/${id}`;
  }

  @Get()
  findAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ): string {
    return `limit ${limit}, offset ${limit}, brand: ${brand}`;
  }
}
