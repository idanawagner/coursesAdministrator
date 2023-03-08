import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { CoursesModule } from "../components/courses/courses.module";
import { HomeModule } from "../components/home/home.module";
import { InscriptionsModule } from "../components/inscriptions/inscriptions.module";
import { NavbarModule } from "../components/navbar/navbar.module";
import { StudentsModule } from "../components/students/students.module";
import { MaterialModule } from "./modules/material.module";


@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    StudentsModule,
    CoursesModule,
    HomeModule,
    NavbarModule,
    InscriptionsModule,

  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    StudentsModule,
    CoursesModule,
    HomeModule,
    NavbarModule,
    InscriptionsModule,


  ],
})
export class SharedModule { }
