import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppRouter } from './app.router';
import { AppComponent } from './app.component';
import { TeacherDashboardComponent } from './pages/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { ClassDashboardComponent } from './pages/class-dashboard/class-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NewTeacherComponent } from './components/teacher/new-teacher/new-teacher.component';
import { ListTeachersComponent } from './components/teacher/list-teachers/list-teachers.component';
import { AppService } from './services/app.service';
import { ComponentCommunicationService } from './services/component-communication.service';

@NgModule({
  declarations: [
    AppComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent,
    ClassDashboardComponent,
    LoginComponent,
    NewTeacherComponent,
    ListTeachersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule.forRoot(),
    AppRouter
  ],
  providers: [
    AppService,
    ComponentCommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }