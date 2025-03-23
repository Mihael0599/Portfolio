import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-slide-text',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './slide-text.component.html',
  styleUrl: './slide-text.component.scss'
})
export class SlideTextComponent {

  items: string[] = [
    'Frontend Developer',
    'Open to Work',
    'Available for remote work',
    'Based in Spaichingen',
  ];

}
