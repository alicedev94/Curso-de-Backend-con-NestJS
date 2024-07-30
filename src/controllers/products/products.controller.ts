import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';

import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';
import { ProductsService } from 'src/services/products/products.service';


@Controller('products')
export class ProductsController {
  constructor(private ProductsService: ProductsService) {}

  @Get('filter')
  filter(): string {
    return 'This action return products/filters1';
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): string {
    return `This action return products/${id}`;
  }

  @Get()
  findAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ): string {
    this.ProductsService.update();
    return `limit ${limit}, offset ${offset}, brand: ${brand}`;
  }

  @Post('create')
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Body() payload: CreateProductDto) {
    return { messege: 'User created', user: payload };
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return { messege: 'Update user', updateUser: payload };
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return { messege: 'Delete user', userId: id };
  }
}
