import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';



@NgModule({
  declarations: [
    InscriptionsComponent

  ],
  imports: [
    CommonModule,
    InscriptionsRoutingModule
  ],
  exports: [InscriptionsComponent]
})
export class InscriptionsModule { }
