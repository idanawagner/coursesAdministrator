import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { ToolbarModule } from 'src/app/core/toolbar/toolbar.module';

@NgModule({
    declarations: [
        HomeComponent

    ],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule,
      HomeRoutingModule,
      ToolbarModule
    ],
    exports: [
        HomeComponent,


    ],
    providers:[
     HomeModule
    ]
})
export class HomeModule { }
