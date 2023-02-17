import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar.component';
import { MaterialModule } from '../modules/material.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
