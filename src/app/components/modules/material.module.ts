import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {  MatButtonModule} from "@angular/material/button";
import {  MatIconModule} from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule  } from "@angular/material/tabs";
import { MatCardModule  } from "@angular/material/card";
import { MatMenuModule  } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule
  ],
})
export class MaterialModule { }
