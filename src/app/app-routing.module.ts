import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecentComponent } from './recent/recent.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: 'favourite',component:FavouriteComponent},
  {path: 'recent',component:RecentComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
