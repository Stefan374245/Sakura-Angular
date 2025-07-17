

// This file is the main entry point for the Angular application.
// set togerther of app.component.ts and app.compenent.html
// It bootstraps the application using the AppComponent and the appConfig.
// it gives the application its root component and configuration.
// main.ts is responsible for starting the Angular application.


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from "./main-content/main-content.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { ImprintComponent } from './imprint/imprint.component';


/**
 * The root component of the Sakura application.
 *
 * @remarks
 * This component serves as the entry point for the Angular application.
 * It sets up the main layout and includes the router outlet for navigation.
 *
 * @selector app-root
 * @imports RouterOutlet
 * @templateUrl ./app.component.html
 * @styleUrl ./app.component.scss
 *
 * @property {string} title - The title of the application.
 */
@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    MainContentComponent,
    FooterComponent,
    ImprintComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura';
}
