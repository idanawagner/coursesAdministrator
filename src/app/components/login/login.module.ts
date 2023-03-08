import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';



@NgModule({
  declarations: [
    LoginComponent
  ],

  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,

  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
