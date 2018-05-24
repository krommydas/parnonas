import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MenuItemMedia, Media, MediaCollection } from '../../../models/menu-items/menu-item-media';
import { MediaPlayerComponent } from '../../media-player/media-player-component';
import { Globals } from 'globalsPath';

@Component({
  selector: 'menu-item-media',
  templateUrl: './menu-item-media-component.html',
})

export class MenuItemMediaComponent {
  @Input() data: MenuItemMedia;

  Globals = Globals;

  constructor(public dialogService: MatDialog) { }

  openDialog(media: Media): void {
    this.dialogService.open(MediaPlayerComponent, {
      maxWidth: '90%',
      maxHeight: '90%',
      height: '90%',
      data: media,
      position: {
        top: '10px'
      }
    });
  }

}
