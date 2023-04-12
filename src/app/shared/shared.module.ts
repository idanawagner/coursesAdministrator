import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./modules/material.module";
import { CarouselModule } from "ngx-bootstrap/carousel";


@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,

  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,


  ],
})
export class SharedModule { }
