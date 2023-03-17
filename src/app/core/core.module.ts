import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { ToolbarModule } from "./toolbar/toolbar.module";

@NgModule({
  declarations: [

  ],
  imports: [
    ToolbarModule,
    HttpClientModule,

  ],
  exports: [
    ToolbarModule,
    HttpClientModule



  ],
})
export class CoreModule { }
