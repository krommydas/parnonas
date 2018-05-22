import { Component, OnInit, Input } from '@angular/core';
import { MenuItemText } from '../../../models/menu-items/menu-item-text';

@Component({
  selector: 'menu-item-text',
  templateUrl: './menu-item-text-component.html',
})

export class MenuItemTextComponent {
  @Input() data: MenuItemText;

  constructor() { }
}

