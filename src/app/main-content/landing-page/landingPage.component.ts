import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./navBar/nav-bar.component";

@Component({                                    //decorator to define the component
  selector: 'app-landing-page',                 //selector to use this component in HTML
  standalone: true,                             //indicates that this component is standalone
  imports: [CommonModule, NavBarComponent],     //imports needed for this component, currently empty
  template: `                                      
  <section>
   <div> <app-nav-bar></app-nav-bar> </div>
    <h1 class="fontRaleway">Sakura Ramen</h1>
    <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
  </section>
  `,                                                //inline template for the component                            
  styleUrls: ['./landingPage.component.scss']       //styles for the component

})
export class LandingPageComponent {

}
  