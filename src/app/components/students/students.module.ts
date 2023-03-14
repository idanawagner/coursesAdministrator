import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CoursesModule } from "../courses/courses.module";

import { EditStudentsListComponent } from "./components/edit-students-list/edit-students-list.component";
import { StudentsComponent } from "./components/students/students.component";

import { FormatNamePipe } from "./pipes/format-name.pipe";
import { StudentsService } from "./services/students.service";
import { StudentsRountingModule } from "./students-routing.module";




@NgModule({
  declarations: [
    EditStudentsListComponent,
    StudentsComponent,
    FormatNamePipe,

  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRountingModule,
    CoursesModule

  ],
  exports: [
    EditStudentsListComponent,
    StudentsComponent,
    FormatNamePipe,

  ],
  providers:[
    StudentsService,


  ]
})
export class StudentsModule { }
