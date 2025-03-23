import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images-card',
  standalone: true,
  imports: [],
  templateUrl: './images-card.component.html',
  styleUrl: './images-card.component.scss'
})
export class ImagesCardComponent {
  @Input() imageSrc: string = '';
  @Input() text: string = '';

}
