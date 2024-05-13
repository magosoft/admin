import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface MenuChangeEvent {
  key: string;
  routeEvent?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  private menuSource = new Subject<any>();
  private resetSource = new Subject();
  constructor() {

  }

  onMenuStateChange(event: MenuChangeEvent) {
    this.menuSource.next(event);
  }

  reset() {
    this.resetSource.next(true);
  }
}
