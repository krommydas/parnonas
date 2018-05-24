import { Component, OnInit, Input } from '@angular/core';
import { MenuItem, MenuItemType } from '../../models/menu-items/menu-item';

@Component({
  selector: 'menu-item-proxy',
  templateUrl: './menu-item-proxy.html',
})
export class MenuItemProxy {
  @Input() data: MenuItem;

  MenuItemType = MenuItemType;

  constructor() { }
}
