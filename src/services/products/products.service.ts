import { Injectable } from '@nestjs/common';

import { Product } from '../../etities/products';
console.log('Product', Product);

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'phone',
      description: 'one phone des',
      price: 100,
      stock: 10,
      image: 'image/ruta',
    },
  ];

  maxIndex(): number{
    let arrayIndex = [];
    this.products.find((item) => {
      arrayIndex.push(item.id);
    });
    return Math.max(...arrayIndex);
  }

  create(paylaod: Product[]) {
    let index: number = this.maxIndex();
    index++;
    // Añadir la data al arreglo
    // retornar el nuevo id del producto creado
  }
  update () {
    console.log("Hi i am a update service.");
  }
}
