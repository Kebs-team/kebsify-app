import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { Section1Component } from './sections/section1/section1.component';
import { Section2Component } from './sections/section2/section2.component';
import { Section3Component } from './sections/section3/section3.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';


@NgModule({
  declarations: [
    LandingpageComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
