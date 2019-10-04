import { NgModule } from '@angular/core';
import { MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [
    MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule 
  ],
  exports: [
    MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule 
  ]
})
export class CustomMaterialModule {
}