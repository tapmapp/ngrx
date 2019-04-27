import { Pizza } from '../../models/pizza.model';
import * as fromPizza from '../actions/pizza.actions';

export interface PizzaState {
    data: Pizza[];
    loaded: boolean;
    loading: boolean;
    entities: any;
}

export const initialState: PizzaState = {
    data: [],
    loaded: false,
    loading: false,
    entities: null,
}

export function reducer(state = initialState, action: fromPizza.PizzaActions): PizzaState {
    
    switch(action.type) {
        case fromPizza.LOAD_PIZZAS: {
            return {
                ...state,
                loading: true,
            }
        }
        case fromPizza.LOAD_PIZZAS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
            }
        }
        case fromPizza.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
            }
        }
        default: return state;
    }
    
}

export const getPizzas = (state: PizzaState) => state.data;
export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;