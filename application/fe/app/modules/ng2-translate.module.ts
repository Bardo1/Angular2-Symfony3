import { NgModule }      from '@angular/core';
import { TranslateModule, TranslateService } from 'ng2-translate';

@NgModule({
  imports: [ TranslateModule.forRoot() ],
  exports: [ TranslateModule ]
})

export class Ng2TranslateModule {
  constructor(private translate: TranslateService) {
    translate.addLangs(["en"]);
    translate.setDefaultLang('en');
  }
}