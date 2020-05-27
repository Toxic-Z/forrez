import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../shared/services/api.service';
import {CommonService} from '../../../shared/services/common.service';
import {Product} from '../../../shared/interfaces/product';
import {Router} from '@angular/router';
import {Order} from '../../../shared/interfaces/order';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingOptions: string[] = [
    'FREE SHIPPING',
    'EXPRESS SHIPPING - additional 9.99 €',
    'COURIER SHIPPING - additional 19.99 €'
  ];
  public products: Product[] = [];
  private totalSum = 0;
  public form: any;

  constructor(
    private apiService: ApiService,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.commonService.fetchOrderedProducts();
    this.products.forEach((p: Product) => {
      this.totalSum += this.commonService.calcSum(p);
    });
    if (this.totalSum > 300) {
      this.shippingOptions = ['FREE EXPRESS SHIPPING'];
    }
    if (this.totalSum > 0) {
      this.form = new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ]),
        address: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50)
        ]),
        phone: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(14)
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]),
        shippingOption: new FormControl(this.totalSum >= 300 ? {
          value: 'FREE EXPRESS SHIPPING',
          disabled: true
        } : 'FREE SHIPPING', [
          Validators.required
        ])
      });
    } else {
      this.router.navigate(['cart']);
    }
  }

  public completeOrder(): void {
    const order: Order = {
      name: this.form.get('name').value,
      address: this.form.get('address').value,
      phone: this.form.get('phone').value,
      email: this.form.get('email').value,
      shippingOption: this.form.get('shippingOption').value,
      products: this.products
    };
    this.apiService.createOrder(order).subscribe(r => {
      if (r) {
        this.commonService.setOrderedProducts([]);
        this.router.navigate(['cart']);
      } else {
        console.log(r);
      }
    });
  }

  public validatePhone(e: any): void {
    if (!Number.isInteger(+e.data) && e.data !== '+') {
      e.target.value = +e.target.value.slice(0, -1);
    }
    if (e.data === '+' && e.target.value.length !== 1) {
      e.target.value = +e.target.value.slice(0, -1);
    }
  }
}
