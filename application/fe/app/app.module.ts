// NG-MODULES
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

// MODULES
import { AppRoutingModule } from './modules/app-routing.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ToastrModule } from './modules/toastr.module';
import { Ng2TranslateModule } from './modules/ng2-translate.module';

// COMPONENTS
import { AppRootComponent } from './ui/app-root/app-root.component';
import { DashboardComponent }  from './ui/dashboard/dashboard.component';
import { HomeComponent }  from './ui/home/home.component';
import { NavbarComponent }  from './ui/navbar/navbar.component';

// PROVIDERS
import { TestRepository }  from './dal/repositories/test.repository';
import { TestService }  from './bal/services/test.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SlimLoadingBarModule.forRoot(),
    ToastrModule,
    Ng2TranslateModule
  ],
  declarations: [ 
    AppRootComponent, 
    DashboardComponent, 
    HomeComponent,
    NavbarComponent
  ],
  providers : [
    TestRepository,
    TestService
  ],
  bootstrap: [ 
    AppRootComponent 
  ]
})

export class AppModule { }
