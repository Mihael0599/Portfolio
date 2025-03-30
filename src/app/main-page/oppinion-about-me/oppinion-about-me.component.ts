import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';


@Component({
  selector: 'app-oppinion-about-me',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './oppinion-about-me.component.html',
  styleUrl: './oppinion-about-me.component.scss'
})
export class OppinionAboutMeComponent{

}