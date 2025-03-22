import { Component } from '@angular/core';
import { SlideTextComponent } from './slide-text/slide-text.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [SlideTextComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
