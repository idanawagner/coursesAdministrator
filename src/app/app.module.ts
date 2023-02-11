import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CourseListComponent } from './components/course-list/course-list.component';

// Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './components/modules/material.module';
import { EditStudentsListComponent } from './components/edit-students-list/edit-students-list.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { DirectiveFontDirective } from './directives/directive-font.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    NavbarComponent,
    ToolbarComponent,
    CourseListComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    EditStudentsListComponent,
    FormatDatePipe,
    DirectiveFontDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
