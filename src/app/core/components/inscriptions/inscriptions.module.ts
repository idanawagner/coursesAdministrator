import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';



@NgModule({
  declarations: [
    InscriptionsComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [InscriptionsComponent]
})
export class InscriptionsModule { }
