import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lazy-Loading
const routes: Routes = [{ path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
