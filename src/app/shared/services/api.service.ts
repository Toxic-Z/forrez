import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Order} from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment.apiUrl;

  public mockedProduct: Product = {
    title: 'Title Lorem ipsum dolor sit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolores dolorum illum odio sint. Debitis, minus, praesentium!',
    price: 15
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public fetchProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.url}products`);
  }

  public createProduct(): any {
    return this.httpClient.post(`${this.url}products`, this.mockedProduct);
  }

  public createOrder(order: Order): Observable<any> {
    return this.httpClient.post(`${this.url}orders`, order);
  }
}
