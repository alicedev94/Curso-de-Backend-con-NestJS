import { IsNumber, IsString, IsNotEmpty } from "class-validator";

import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
 @IsString()
 @IsNotEmpty()
  readonly name: string;
  readonly description: string;
  @IsNumber()
  readonly price: number;
  readonly stock: number;
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
