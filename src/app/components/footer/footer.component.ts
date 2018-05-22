import { Component, OnInit, Input } from '@angular/core';
import { Footer } from '../../models/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit  {
  @Input() data: Footer;

  constructor() { }

  ngOnInit() {
  }

}
