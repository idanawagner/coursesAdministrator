import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './service/login.service';
import { StoreModule } from '@ngrx/store';
import { loginStateFeatureKey, reducer } from './login.state/login-state.reducer';



@NgModule({
  declarations: [
    LoginComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    StoreModule.forFeature(loginStateFeatureKey, reducer)

  ],
  exports:[
    LoginComponent
  ],

  providers:[
    LoginService
  ]
})
export class LoginModule { }
