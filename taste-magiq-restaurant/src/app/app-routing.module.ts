import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuItemModule } from '../menu-item/menu-item.module';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'main', component:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MenuItemModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
