import { CreateDieticianComponent } from './create-dietician/create-dietician.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './Component/admin-login/admin-login.component';
import { EmployeeComponent } from './Component/employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLoginComponent
  },
  // { path: 'app-cust-home', loadChildren: '' },
  {
    path: 'app-admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'app-employee',
        component: EmployeeComponent,
      },
      {
        path: '',
        component: CreateDieticianComponent,
      },
    ]

  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }