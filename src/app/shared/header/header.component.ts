import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLang: 'en' | 'de' = 'de';
  changeLogo: boolean = false;
  hoveredIndex: number | null = null;

  links = [
    {
      label: 'About me',
      href: '#about-me',
    },
    {
      label: 'Skills',
      href: '#skills',
    },
    {
      label: 'Projects',
      href: '#projects',
    }
  ];

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
  }

}
