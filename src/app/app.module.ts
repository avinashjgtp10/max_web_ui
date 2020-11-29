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
import { EmployeeComponent } from './Component/employee/employee.component';
import { HelloComponent } from './Component/hello/hello.component';
import { CreateDieticianComponent } from './create-dietician/create-dietician.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    DataTableComponent,
    EmployeeComponent,
    HelloComponent,
    CreateDieticianComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgmaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
