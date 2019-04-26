import { Action } from '@ngrx/store';

// INTERFACES
import { Pizza } from '../../models/pizza.model';

// LOAD PIZZAS
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]) {}
}

export type PizzaActions = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;