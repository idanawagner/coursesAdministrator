import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material.module';
import { HomeComponent } from './components/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesModule } from '../courses/courses.module';
import { StudentsModule } from '../students/students.module';
import { LoginModule } from '../login/login.module';
import { ToolbarModule } from '../toolbar/toolbar.module';





@NgModule({
    declarations: [
        HomeComponent

    ],
    imports: [
      CommonModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      CoursesModule,
      StudentsModule,
      LoginModule,
      ToolbarModule,



    ],
    exports: [
        HomeComponent,


    ],
    providers:[
     HomeModule
    ]
})
export class HomeModule { }
