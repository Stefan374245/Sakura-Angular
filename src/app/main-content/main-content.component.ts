import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landingPage.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { LocationComponent } from './location/location.component';``

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    LandingPageComponent,
    OurMenuComponent,
    HowToOrderComponent,
    LocationComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl:    './main-content.component.scss'
})
export class MainContentComponent {

}
