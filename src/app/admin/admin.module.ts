import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginComponent,
    DashboardComponent,
    AddComponent],
    
  imports: [
    CommonModule,
    RouterModule.forChild(
      [{ path: 'login', component: LoginComponent },
      {
        path: '', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'add', component: AddComponent }
        ]
      }
      ]
    )
  ]
})
export class AdminModule { }
