import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRootModule } from './app/app-root/app-root.module'
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment.dev';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppRootModule);