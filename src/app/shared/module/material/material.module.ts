import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';


const matArr=[MatButtonModule,MatIconModule,MatSnackBarModule,MatCardModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matArr
  ],
  exports:[...matArr]
})
export class MaterialModule { }
