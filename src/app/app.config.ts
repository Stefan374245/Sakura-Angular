import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

//Zweck: Zentrale Konfiguration der Angular-Anwendung

//provideZoneChangeDetection: Konfiguriert die Change Detection (Performance-Optimierung)
//provideRouter(routes): Stellt das Routing-System zur Verfügung
//Hier werden alle globalen Services und Provider registriert