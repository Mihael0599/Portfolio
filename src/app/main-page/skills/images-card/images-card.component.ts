import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images-card.component.html',
  styleUrl: './images-card.component.scss'
})
export class ImagesCardComponent {
  @Input() imageSrc: string = '';
  @Input() text: string = '';
  @Input() isHovered: boolean = false;

}
