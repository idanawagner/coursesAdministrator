import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from "../modules/material.module";
import { CoursesService } from "./services/courses.service";
import { FormatDatePipe } from "./pipes/format-date.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CourseListComponent } from "./components/course-list/course-list.component";


@NgModule({
  declarations: [
    CourseListComponent,
    FormatDatePipe

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    CourseListComponent

  ],
  providers:[
    CoursesService
  ]
})
export class CoursesModule { }
