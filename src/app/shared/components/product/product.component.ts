import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from '../../interfaces/product';
import {CommonService} from '../../services/common.service';
import {faImage, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  trashAlt = faTrashAlt;
  faImage = faImage;
  @Input() prod: Product;

  constructor(
    private commonService: CommonService
  ) { }

  public product: Product;

  ngOnInit(): void {
    this.product = this.prod;
  }

  public calcSum(): number{
    return this.commonService.calcSum(this.product);
  }

  public changeValue(method: string): void {
    switch (method) {
      case 'dec':
        if (this.product.count > 0) {
          this.product.count--;
        }
        break;
      case 'inc':
        if (this.product.count < 50) {
          this.product.count++;
        }
        break;
    }
  }

  public checkInput(e: any): void {
    if (+e.target.value > 50 || !Number.isInteger(+e.data) || +e.target.value < 0) {
      const value = +e.target.value.slice(0, -1);
      e.target.value = value;
      this.product.count = value;
    }
    if (e.target.value.length > 1 && +e.target.value[0] === 0) {
      const value = +e.target.value[1];
      e.target.value = value;
      this.product.count = value;
    }
  }

  public clearInput() {
    this.product.count = 0;
  }
}
