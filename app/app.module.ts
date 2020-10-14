import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import {SubjectService} from './services/subject.service';
import { SubjectBoxComponent } from './subject-box/subject-box.component';
import { SubjectTableComponent } from './subject-table/subject-table.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ControlBoxComponent } from './control-box/control-box.component';
import { SubjectControlComponent } from './subject-control/subject-control.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectListComponent,
    SubjectBoxComponent,
    SubjectTableComponent,
    ControlBoxComponent,
    SubjectControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    SubjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
