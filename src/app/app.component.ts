import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MainService } from './services/main.service';
import { Footer } from './models/footer';
import { Header } from './models/header';
import { MenuItem } from './models/menu-items/menu-item';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dataService: MainService) { }

  footerData: Footer;
  headerData: Header;
  menuItems: MenuItem[];

  ngOnInit() {
    this.dataService.getFooterData().subscribe(data => this.footerData = data);
    this.dataService.getHeaderData().subscribe(data => this.headerData = data);
    this.dataService.getMenuData().subscribe(data => this.menuItems = data);
  }
}
