import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectDbComponent } from './connect-db/connect-db.component';
import {HttpClientModule} from '@angular/common/http';
import { RoutingComponent } from './routing/routing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component'
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectDbComponent,
    RoutingComponent,
    DashboardComponent,
    StudentdetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
