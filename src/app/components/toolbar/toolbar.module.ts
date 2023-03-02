import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material.module';
import { ToolbarComponent } from './components/toolbar.component';
import { NavbarModule } from '../navbar/navbar.module';
import { LoginModule } from '../login/login.module';
import { DirectiveFontDirective } from './directives/directive-font.directive';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
   ToolbarComponent,
   DirectiveFontDirective

  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarModule,
    LoginModule,
    RouterModule

  ],
  exports:[
    ToolbarComponent
  ]
})
export class ToolbarModule { }
