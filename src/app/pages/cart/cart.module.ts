import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: CartComponent},
];

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxSkeletonLoaderModule,
    FormsModule,
    SharedModule
  ]
})
export class CartModule { }
