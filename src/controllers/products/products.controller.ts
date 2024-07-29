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
} from '@nestjs/common';

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
    return `limit ${limit}, offset ${offset}, brand: ${brand}`;
  }

  @Post('create')
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Body() payload: any) {
    return { messege: 'User created', user: payload };
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() payload: any) {
    return { messege: 'Update user', updateUser: payload };
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return { messege: 'Delete user', userId: id };
  }
}
