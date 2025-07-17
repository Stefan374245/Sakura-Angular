import { bootstrapApplication } from '@angular/platform-browser';  // Start Bedingungen für Angular-Anwendung
import { appConfig } from './app/app.config';                     // Konfiguration der Angular-Anwendung
import { AppComponent } from './app/app.component';        // Hauptkomponente der Angular-Anwendung    

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  //main.ts
//Zweck: Einstiegspunkt der Anwendung

//Lädt die appConfig und startet die App
//Verbindet AppComponent mit der Konfiguration
