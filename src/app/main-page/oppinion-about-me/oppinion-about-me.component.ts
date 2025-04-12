import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-oppinion-about-me',
  standalone: true,
  imports: [CarouselComponent, TranslateModule],
  templateUrl: './oppinion-about-me.component.html',
  styleUrl: './oppinion-about-me.component.scss'
})
export class OppinionAboutMeComponent {

}