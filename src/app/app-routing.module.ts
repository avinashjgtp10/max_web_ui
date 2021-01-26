import { CreateDieticianComponent } from "./create-dietician/create-dietician.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./Component/admin-dashboard/admin-dashboard.component";
import { AdminLoginComponent } from "./Component/admin-login/admin-login.component";
import { CalorieDataComponent } from "./Component/calorie-data/calorie-data.component";
import { ChatComponent } from "./Component/chat/chat.component";
import { ChatDashboardComponent } from "./Component/chat-dashboard/chat-dashboard.component";
import { from } from "rxjs";
import { CreateDietPlanComponent } from './create-diet-plan/create-diet-plan.component';
import { AddNewItemComponent } from './Component/calorie/add-new-item/add-new-item.component'
import { AddSlotComponent } from './Component/add-slot/add-slot.component'
import { DieticianCalenderComponent } from './Component/dietician-calender/dietician-calender.component'

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
        path: "calorie-data",
        component: CalorieDataComponent,
      },
      {
        path: "",
        component: CalorieDataComponent,
      },
      {
        path:"add-new-item",
        component:AddNewItemComponent
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
        path:'add-slot',
        component:AddSlotComponent
      },
      {
        path:'dietcian-calender',
        component:DieticianCalenderComponent
      },
      {
        path: "chatDashboard",
        component: ChatComponent,
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
