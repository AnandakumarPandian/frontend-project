import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './login.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appLoginConfig: ApplicationConfig = {
  providers: [ 
    provideRouter(routes),
],
};
