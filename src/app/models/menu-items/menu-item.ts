import { MenuItemText } from './menu-item-text';
import { MenuItemMedia } from './menu-item-media';

export interface MenuItemData {

}

export enum MenuItemType {
  Dashboard = 0,
  AboutUs = 1,
  Products = 2,
  Contact = 3,
  Reviews = 4,
  Media = 5
}


export class MenuItem {
  public constructor(headerclass: string, headertext: string, content: MenuItemData, type: MenuItemType) {
    this.headerClass = headerclass;
    this.headerText = headertext;
    this.type = type;
    this.content = content;
}

  headerClass: string;
  headerText: string;
  content: MenuItemData;
  type: MenuItemType;

  public static readonly AboutUs: MenuItem = new MenuItem('fa fa-facebook', '', new MenuItemText(), MenuItemType.AboutUs);
  public static readonly Media: MenuItem = new MenuItem('fa fa-twitter', '', new MenuItemMedia(), MenuItemType.Media);
}

