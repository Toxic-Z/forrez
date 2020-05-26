import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { Product } from '../../../shared/interfaces/product';
import { CommonService } from '../../../shared/services/common.service';
import { forkJoin} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: Product[];
  constructor(
    private router: Router,
    private apiService: ApiService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.apiService.fetchProducts().subscribe( (pr: Product[]) => {
      if (!pr.length) {
        forkJoin(
          this.apiService.createProduct(),
          this.apiService.createProduct(),
          this.apiService.createProduct()
        ).subscribe(() => {
          this.apiService.fetchProducts().subscribe((prods: Product[]) => {
            this.products = prods;
          });
        });
      } else  {
        this.products = pr;
      }
      this.products.map((i: any) => i.count = 5);
    });
  }

  public calcSum(arr: Product[]) {
    let res = 0;
    arr.forEach((p: Product) => {
      res += this.commonService.calcSum(p);
    });
    return res;
  }

  public onBuyAction(): any {
    this.commonService.setOrderedProducts(this.products);
    this.router.navigate(['shipping']);
  }
}
