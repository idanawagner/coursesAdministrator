import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';

// Modules
import { token, config } from './environment/config';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/components/register.component';
import { CoreModule } from './core/core.module';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';




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
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
  ],
  providers: [
    {provide: token, useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
