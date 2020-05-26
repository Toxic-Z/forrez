import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private orderedProducts: Product[] = [];

  constructor() {
  }

  public calcSum(product: Product): number {
    return product.price * product.count;
  }

  public setOrderedProducts(products: Product[]): void {
    this.orderedProducts = products;
  }

  public fetchOrderedProducts(): Product[] {
    return this.orderedProducts;
  }
}
