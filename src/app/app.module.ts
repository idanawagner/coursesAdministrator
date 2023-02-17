import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/components/register.component';

// Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './components/modules/material.module';
import { DataService } from './services/data.service';
import { token } from './config';
import { config } from 'rxjs';
import { StudentsModule } from './components/students/students.module';
import { CoursesModule } from './components/courses/courses.module';
import { HomeModule } from './components/home/home.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MaterialModule,
    StudentsModule,
    CoursesModule,
    HomeModule,
    ToolbarModule,
    NavbarModule
  ],
  providers: [
    {provide: token, useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
