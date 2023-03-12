import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./modules/material.module";


@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

  ],
})
export class SharedModule { }
