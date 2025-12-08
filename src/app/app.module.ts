import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './shared/component/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/component/student-dashboard/student-form/student-form.component';
import { StudentTableComponent } from './shared/component/student-dashboard/student-table/student-table.component';
import { MaterialModule } from './shared/module/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
