import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/tutorial.reducer";
import { ReadComponent } from "./read/read.component";
import { CreateComponent } from "./create/create.component";

import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CustomMaterialModule } from "./custom-material/custom-material.module";
import {MatDialogModule} from "@angular/material";
import { CusotmDialogComponent } from './cusotm-dialog/cusotm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ReadComponent,
    CreateComponent,
    ConfirmDialogComponent,
    CusotmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ tutorial: reducer })
  ],
  providers: [],
  entryComponents: [ConfirmDialogComponent, CusotmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
