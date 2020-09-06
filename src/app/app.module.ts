import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './site/menu/menu.component';
import { MainPageComponent } from './site/main-page/main-page.component';
import { CartComponent } from './site/cart/cart.component';
import { ShipComponent } from './site/ship/ship.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddComponent } from './admin/add/add.component';
import { NotFoundComponent } from './site/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    CartComponent,
    ShipComponent,
    DashboardComponent,
    AddComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
