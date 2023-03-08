import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';

// Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataService } from './services/data.service';
import { token } from './config';
import { config } from 'rxjs';

import { InscriptionsModule } from './core/components/inscriptions/inscriptions.module';
import { RegisterComponent } from './core/components/register/components/register.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursesModule } from './core/components/courses/courses.module';
import { HomeModule } from './core/components/home/home.module';
import { MaterialModule } from './core/components/modules/material.module';
import { NavbarModule } from './core/components/navbar/navbar.module';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { StudentsModule } from './core/components/students/students.module';
import { ToolbarModule } from './core/components/toolbar/toolbar.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NotFoundComponent,

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
    NavbarModule,
    AppRoutingModule,
    InscriptionsModule
  ],
  providers: [
    {provide: token, useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
