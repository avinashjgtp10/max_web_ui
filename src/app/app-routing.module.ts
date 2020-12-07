import { CreateDieticianComponent } from "./create-dietician/create-dietician.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./Component/admin-dashboard/admin-dashboard.component";
import { AdminLoginComponent } from "./Component/admin-login/admin-login.component";
import { EmployeeComponent } from "./Component/employee/employee.component";
import { ChatComponent } from "./Component/chat/chat.component";
import { ChatDashboardComponent } from "./Component/chat-dashboard/chat-dashboard.component";
import { from } from "rxjs";
import { CreateDietPlanComponent } from './create-diet-plan/create-diet-plan.component';

const routes: Routes = [
  {
    path: "",
    component: AdminLoginComponent,
  },
  {
    path: "app-admin-dashboard",
    component: AdminDashboardComponent,
    children: [
      {
        path: "app-employee",
        component: EmployeeComponent,
      },
      {
        path: "",
        component: EmployeeComponent,
      },
      {
        path: "addDietician",
        component: CreateDieticianComponent,
      },
      {
        path: 'app-create-diet-plan',
        component: CreateDietPlanComponent,
      },
      {
        path: "chatDashboard",
        component: ChatDashboardComponent,
        children: [
          {
            path: "chat",
            component: ChatComponent,
          },
        ],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
