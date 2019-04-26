import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromPizzas from './pizza.reducer';

export interface ProductsState {
    pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
}

export const getProductsState = createFeatureSelector<ProductsState>('products');

// SELECTORS
// Allow us to separate our application state with our components trees
// We can compose our application state 
// and simply pass the slices that we need to a particular component

// PIZZAS STATE
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => state.pizzas);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getAllPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getAllPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);