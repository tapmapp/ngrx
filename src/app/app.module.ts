import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

// NGRX
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers, CustomSerializer } from './store';

// COMPONENTS
import { AppComponent } from './app.component';

// ROUTES
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', loadChildren: './products/products.module#ProductsModule', }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([])
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
