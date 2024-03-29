import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CoursesModule } from "../courses/courses.module";

import { EditStudentsListComponent } from "./components/edit-students-list/edit-students-list.component";
import { StudentsComponent } from "./components/students/students.component";

import { FormatNamePipe } from "./pipes/format-name.pipe";
import { StudentsService } from "./services/students.service";
import { StudentsRountingModule } from "./students-routing.module";
import { EffectsModule } from '@ngrx/effects';
import { StudentsStateEffects } from './state/students-state.effects';
import { reducer, studentsStateFeatureKey } from "./state/students-state.reducer";
import { StoreModule } from "@ngrx/store";
import { StudentDetailComponent } from './student-detail/student-detail.component';




@NgModule({
  declarations: [
    EditStudentsListComponent,
    StudentsComponent,
    FormatNamePipe,
    StudentDetailComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRountingModule,
    CoursesModule,
    StoreModule.forFeature(studentsStateFeatureKey, reducer),
    EffectsModule.forFeature([StudentsStateEffects])

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
