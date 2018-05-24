import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { } from '@menu-items/menu-item-media-component/menu-item-media-component';  
import { MenuItemTextComponent } from '../components/tabs/menu-item-text-component/menu-item-text-component'; 
import { MenuItemMediaComponent } from '../components/tabs/menu-item-media-component/menu-item-media-component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'aboutus', component: MenuItemTextComponent },
  { path: 'media', component: MenuItemMediaComponent },
  //{ path: 'media', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
