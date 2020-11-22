import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  public value = new Subject<string>();

  constructor() { }

  getObservable() : Subject<string>{
    return this.value;
  }

  public setValue(newStringVar: string){
    this.value.next(newStringVar);
  }

  // value : string;

  // setValue(value: string){
  //   this.value = value;
  // }

  // getValue(): string{
  //   return this.value;
  // }
}
