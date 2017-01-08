import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'home',
  templateUrl: './app/ui/home/home.component.html',
})
export class HomeComponent {

  constructor(private translate: TranslateService) {
    translate.addLangs(["en"]);
    translate.setDefaultLang('en');
  }

}
