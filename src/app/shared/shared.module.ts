import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import { SkeletonProductComponent } from './components/skeleton-product/skeleton-product.component';



@NgModule({
  declarations: [ProductComponent, SkeletonProductComponent],
  exports: [
    ProductComponent,
    SkeletonProductComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      FontAwesomeModule,
      NgxSkeletonLoaderModule,
  ]
})
export class SharedModule { }
