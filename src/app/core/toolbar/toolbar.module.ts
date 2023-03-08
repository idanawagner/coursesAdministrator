import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar.component';

import { DirectiveFontDirective } from './directives/directive-font.directive';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { LoginModule } from 'src/app/components/login/login.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';




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
