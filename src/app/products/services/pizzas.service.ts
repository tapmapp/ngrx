import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pizza } from '../models/pizza.model';
import { catchError } from '../../../../node_modules/rxjs/operators';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class PizzasService {
    constructor (private http: HttpClient) {}
  
    getAll() {
      return this.http.get<Pizza[]>('/pizzas').pipe(
        catchError((error: any) => Observable.throw(error.json))
      );
    }
  }