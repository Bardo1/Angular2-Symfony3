import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent }  from './ui/navbar/navbar.component';
import { HomeComponent }  from './ui/home/home.component';
import { DashboardComponent }  from './ui/dashboard/dashboard.component';

import { TestService }  from './bal/services/test.service';
import { TestRepository }  from './dal/repositories/test.repository';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [ 
    NavbarComponent,
    HomeComponent,
    DashboardComponent 
  ],
  providers : [
    TestService,
    TestRepository
  ],
  bootstrap:    [ 
    NavbarComponent 
  ]
})

export class AppModule { }
