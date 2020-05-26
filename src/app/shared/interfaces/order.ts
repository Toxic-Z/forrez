import { Product } from './product';

export interface Order {
  name: string;
  address: string;
  phone: string;
  email: string;
  shippingOption: string;
  products: Product[];
}
