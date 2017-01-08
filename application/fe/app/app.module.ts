// NG-MODULES
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule } from 'ng2-translate';

// COMPONENTS
import { DashboardComponent }  from './ui/dashboard/dashboard.component';
import { HomeComponent }  from './ui/home/home.component';
import { NavbarComponent }  from './ui/navbar/navbar.component';

// PROVIDERS
import { TestRepository }  from './dal/repositories/test.repository';
import { TestService }  from './bal/services/test.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot()
  ],
  declarations: [ 
    DashboardComponent, 
    HomeComponent,
    NavbarComponent
  ],
  providers : [
    TestRepository,
    TestService
  ],
  bootstrap:    [ 
    NavbarComponent 
  ]
})

export class AppModule { }
