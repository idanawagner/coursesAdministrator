import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { CoursesService } from "./services/courses.service";
import { FormatDatePipe } from "./pipes/format-date.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { CoursesRountingModule } from "./courses.routing.module";
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { MaterialModule } from "src/app/shared/modules/material.module";


@NgModule({
  declarations: [
    CourseListComponent,
    FormatDatePipe,
    EditCourseComponent,
    AddCourseComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesRountingModule,

  ],
  exports: [
    CourseListComponent

  ],
  providers:[
    CoursesService
  ]
})
export class CoursesModule { }
