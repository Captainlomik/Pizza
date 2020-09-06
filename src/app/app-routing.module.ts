import { NotFoundComponent } from './site/not-found/not-found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ShipComponent } from './site/ship/ship.component';
import { CartComponent } from './site/cart/cart.component';
import { MainPageComponent } from './site/main-page/main-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:MainPageComponent},
  {path:'cart', component:CartComponent}, 
  {path:'ship', component:ShipComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'404', component:NotFoundComponent},
  {path:'**', redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
