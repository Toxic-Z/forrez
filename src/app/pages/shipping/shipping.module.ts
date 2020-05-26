import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping/shipping.component';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
const routes: Routes = [
  { path: '', component: ShippingComponent},
];

@NgModule({
  declarations: [ShippingComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    ]
})
export class ShippingModule { }
