import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import LogRocket from 'logrocket';


if (environment.production) {
  enableProdMode();
  LogRocket.init('zvuvt4/kolhoosidb-prod');

}

platformBrowserDynamic().bootstrapModule(AppModule);
