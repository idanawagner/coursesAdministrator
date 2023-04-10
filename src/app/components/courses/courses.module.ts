import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { CoursesService } from "./services/courses.service";
import { FormatDatePipe } from "./pipes/format-date.pipe";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { CoursesRountingModule } from "./courses.routing.module";
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { SharedModule } from "src/app/shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { coursesStateFeatureKey, reducer } from "./components/courses-state/courses-state.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CoursesStateEffects } from "./components/courses-state/courses-state.effects";



@NgModule({
  declarations: [
    CourseListComponent,
    FormatDatePipe,
    EditCourseComponent,
    AddCourseComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRountingModule,
    StoreModule.forFeature(coursesStateFeatureKey, reducer),
    EffectsModule.forFeature([CoursesStateEffects])

  ],
  exports: [
    CourseListComponent,
    FormatDatePipe

  ],
  providers:[
    CoursesService
  ]
})
export class CoursesModule { }
