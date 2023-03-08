import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar.component';
import { MaterialModule } from '../modules/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule

  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
