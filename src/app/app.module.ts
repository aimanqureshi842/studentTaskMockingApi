import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './shared/component/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/component/student-dashboard/student-form/student-form.component';
import { StudentTableComponent } from './shared/component/student-dashboard/student-table/student-table.component';
import { MaterialModule } from './shared/module/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PostDashboardComponent } from './shared/component/post-dashboard/post-dashboard.component';
import { PostCardComponent } from './shared/component/post-dashboard/post-card/post-card.component';
import { PostFormComponent } from './shared/component/post-dashboard/post-form/post-form.component';
import { GetconfirmComponent } from './shared/component/getconfirm/getconfirm.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StudentTableComponent,
    PostDashboardComponent,
    PostCardComponent,
    PostFormComponent,
    GetconfirmComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
