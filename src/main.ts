import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// App initially bootstrapped from here
if (environment.production) {
  enableProdMode();
}

// Starts the app
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
