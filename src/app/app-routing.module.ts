import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'cart', pathMatch: 'prefix'},
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },
  { path: 'shipping', loadChildren: () => import('./pages/shipping/shipping.module').then(m => m.ShippingModule) },
  { path: '**', redirectTo: 'cart', pathMatch: 'prefix'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
