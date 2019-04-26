import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';

import * as pizzaActions from '../actions/pizza.actions';
import * as fromServices from '../../services';

@Injectable()
export class PizzasEffects {
    constructor(private actions$: Actions, private pizzaService: fromServices.PizzasService) {}

    @Effect()
    loadPizzas$ = this.actions$
      .pipe(
        ofType(pizzaActions.LOAD_PIZZAS),
        mergeMap(() => this.pizzaService.getAll()
          .pipe(
            map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
            catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
          ))
        );


}