import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ListusersComponent } from './listusers/listusers.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { ListtasksComponent } from './listtasks/listtasks.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddTaskComponent,
    ForgotPasswordComponent,
    ListusersComponent,
    ViewprofileComponent,
    ListtasksComponent,
    ChangepasswordComponent,
    EditTaskComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
