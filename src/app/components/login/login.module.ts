import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './service/login.service';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    LoginComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule

  ],
  exports:[
    LoginComponent
  ],

  providers:[
    LoginService
  ]
})
export class LoginModule { }
