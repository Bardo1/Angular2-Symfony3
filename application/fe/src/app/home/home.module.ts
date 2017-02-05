// NG-MODULES
import { NgModule }      from '@angular/core';

// MODULES
import { Ng2TranslateModule } from '../common/modules/ng2-translate.module';
import { HomeRoutingModule } from './home-routing.module';

// COMPONENTS
import { HomeComponent } from './components/home.component';

// PROVIDERS

@NgModule({
  imports: [ 
    Ng2TranslateModule,
    HomeRoutingModule,
  ],
  declarations: [ 
    HomeComponent,
  ],
  providers : []
})

export class HomeModule { }