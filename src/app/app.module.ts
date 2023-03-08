import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';

// Modules
import { token } from './config';
import { config } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';

import { CoursesModule } from './components/courses/courses.module';
import { HomeModule } from './components/home/home.module';
import { InscriptionsModule } from './components/inscriptions/inscriptions.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/components/register.component';
import { StudentsModule } from './components/students/students.module';

import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    CoreModule,
    StudentsModule,
    CoursesModule,
    HomeModule,
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
