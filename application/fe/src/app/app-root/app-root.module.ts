// NG-MODULES
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

// MODULES
import { AppRootRoutingModule } from './app-root-routing.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

// APP MODULES 
import { AccountModule } from '../account/account.module';
import { CommonModule } from '../common/common.module';
import { HomeModule } from '../home/home.module';

// COMPONENTS
import { AppRootComponent } from './components/app-root.component';
import { NavbarComponent }  from '../common/components/navbar/navbar.component';

// PROVIDERS

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRootRoutingModule,
    SlimLoadingBarModule.forRoot(),
    AccountModule,
    CommonModule,
    HomeModule
  ],
  declarations: [ 
    AppRootComponent,
    NavbarComponent
  ],
  providers : [],
  bootstrap: [ 
    AppRootComponent 
  ]
})

export class AppRootModule { }
