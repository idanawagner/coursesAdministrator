import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "../modules/material.module";
import { EditStudentsListComponent } from "./components/edit-students-list/edit-students-list.component";
import { StudentsComponent } from "./components/students/students.component";

import { FormatNamePipe } from "./pipes/format-name.pipe";
import { StudentsService } from "./services/students.service";



@NgModule({
  declarations: [

    EditStudentsListComponent,
    StudentsComponent,

    FormatNamePipe,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,


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
