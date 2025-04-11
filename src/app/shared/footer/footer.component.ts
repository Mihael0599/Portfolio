import { NgClass, NgFor } from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  hoveredIndex: number | null = null;

  links = [
    {
      label: 'Github',
      href: 'https://github.com/Mihael0599',
      target: '_blank'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mihael-dra%C5%BEi%C4%87-388b86163/',
      target: '_blank'
    },
    {
      label: 'Email',
      href: 'mailto:mihaeldraz10@gmail.com',
    },
    {
      label: 'Legal Notice',
      href: 'imprint',
    }
  ];
}
