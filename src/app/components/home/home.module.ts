import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { ToolbarModule } from 'src/app/core/toolbar/toolbar.module';
import { CoursesModule } from "../courses/courses.module";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { StoreModule } from '@ngrx/store';
import { coursesStateFeatureKey } from '../courses/components/courses-state/courses-state.reducer';
import { reducer } from '../login/login.state/login-state.reducer';
import { CoursesService } from '../courses/services/courses.service';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule,
      HomeRoutingModule,
      ToolbarModule,
      CoursesModule,
      CarouselModule,

      ],
      exports: [
        HomeComponent,
      ],
      providers: [
      ],
    })
export class HomeModule { }
