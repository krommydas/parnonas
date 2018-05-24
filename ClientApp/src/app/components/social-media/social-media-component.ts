import { Component, OnInit, Input } from '@angular/core';
import { SocialMedia } from '../../models/social-media';

@Component({
  selector: 'social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
  @Input() items: SocialMedia;

  constructor() { }

  ngOnInit() {
  }

}
