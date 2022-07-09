import { Injectable } from '@angular/core';

import { map, Observable, of } from 'rxjs';
import { MessageService } from '../message.service';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable({
  providedIn: 'root',
})
export class CrisesService {

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    const crises = of(CRISES);
    this.messageService.add('CrisisService: fetched crises');
    return crises;
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id)!)
    );
  }
}
