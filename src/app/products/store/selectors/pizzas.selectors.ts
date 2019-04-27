import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../../app/store';
import * as fromFeature from '../reducers'
import * as fromPizzas from '../reducers/pizza.reducer';

import { Pizza } from '../../models/pizza.model'; 

// SELECTORS
// Allow us to separate our application state with our components trees
// We can compose our application state 
// and simply pass the slices that we need to a particular component

export const getPizzaState = createSelector(fromFeature.getProductsState, (state: fromFeature.ProductsState) => state.pizzas);
export const getPizzasEntitites = createSelector(getPizzaState, fromPizzas.getPizzasEntities);
export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getAllPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getAllPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
export const getSelectedPizza = createSelector(
    getPizzasEntitites, 
    fromRoot.getRouterState, 
    (entities, router): Pizza => { 
        return router.state && entities[router.state.params.pizzaId];
    });