import { Footer } from '../models/footer';
import { Header } from '../models/header';
import { MenuItem } from '../models/menu-items/menu-item';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MainService {

  constructor() { }

  getFooterData(): Observable<Footer> {
    return of(new Footer());
  }

  getHeaderData(): Observable<Header> {
    return of(new Header());
  }

  getMenuData(): Observable<MenuItem[]> {
    return of([MenuItem.AboutUs, MenuItem.Media]);
  }
}
