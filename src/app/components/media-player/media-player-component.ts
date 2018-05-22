import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Media, MediaType } from '../../models/menu-items/menu-item-media';
import { Globals } from 'globalsPath';

@Component({
  selector: 'media-player',
  templateUrl: './media-player-component.html',
})

export class MediaPlayerComponent {
  @Input() media: Media;

  Globals = Globals;

  MediaType = MediaType;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) {
    this.media = <Media>data;
  }
}
