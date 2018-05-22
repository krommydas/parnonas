import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { RoutingModule } from './modules/routing-module';

import { MainService } from './services/main.service';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuItemProxy } from './components/tabs/menu-item-proxy';
import { MenuItemTextComponent } from './components/tabs/menu-item-text-component/menu-item-text-component'
import { MenuItemMediaComponent } from './components/tabs/menu-item-media-component/menu-item-media-component';
import { MediaPlayerComponent } from './components/media-player/media-player-component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuItemProxy,
    MenuItemTextComponent,
    MenuItemMediaComponent,
    MediaPlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatCardModule,
    RoutingModule
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent],
  entryComponents: [MediaPlayerComponent]
})
export class AppModule { }
