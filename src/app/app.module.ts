import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './Component/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';
import { DataTableComponent } from './Component/data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgmaterialModule } from './Modules/ngmaterial/ngmaterial.module';
import { CalorieDataComponent } from './Component/calorie-data/calorie-data.component';
import { HelloComponent } from './Component/hello/hello.component';
import { CreateDieticianComponent } from './create-dietician/create-dietician.component';
import { ToastrModule } from 'ngx-toastr';
import { ChatComponent } from './Component/chat/chat.component';
import { TimeagoModule } from 'ngx-timeago';
import {chaturl} from "../environments/base"

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatPipePipe } from './pipes/ChatPipe/chat-pipe.pipe';
const config: SocketIoConfig = { url: chaturl, options: {} };

import { CreateDietPlanComponent } from './create-diet-plan/create-diet-plan.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AddNewItemComponent } from './Component/calorie/add-new-item/add-new-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    DataTableComponent,
    CalorieDataComponent,
    HelloComponent,
    CreateDieticianComponent,
    ChatComponent,
    ChatPipePipe,
    CreateDietPlanComponent,
    AddNewItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
    FormsModule,
    AppRoutingModule,
    NgmaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    TimeagoModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 6000,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-center',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
