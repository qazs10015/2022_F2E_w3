import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  // 是否顯示 dialog
  isShow$ = new BehaviorSubject<boolean>(false);
  constructor() { }
}
