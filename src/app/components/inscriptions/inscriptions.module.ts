import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesModule } from '../courses/courses.module';
import { StudentsModule } from '../students/students.module';


@NgModule({
  declarations: [
    InscriptionsComponent

  ],
  imports: [
    CommonModule,
    InscriptionsRoutingModule,
    SharedModule,
    CoursesModule,
    StudentsModule,
  ],
  exports: [InscriptionsComponent]
})
export class InscriptionsModule { }
