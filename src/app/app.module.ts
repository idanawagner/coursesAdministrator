import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';

// Modules
import { token } from './config';
import { config } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/components/register.component';
import { CoreModule } from './core/core.module';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    CoreModule,
    NoopAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: token, useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
