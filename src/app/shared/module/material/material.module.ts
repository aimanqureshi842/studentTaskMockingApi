import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';



const matArr=[MatButtonModule,MatIconModule,MatSnackBarModule,MatCardModule,MatDialogModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matArr
  ],
  exports:[...matArr]
})
export class MaterialModule { }
