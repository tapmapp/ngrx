import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

// COMPONENTS
import { ProductsComponent } from './component/products/products.component';

// SERVICES
import * as services from './services';

// ROUTES
export const ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
]

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    services.services
  ]
})
export class ProductsModule { }
