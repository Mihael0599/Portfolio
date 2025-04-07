import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GlobalDataService } from '../../global-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  globalData = inject(GlobalDataService);

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
    this.globalData.currentLang = this.globalData.currentLang === 'en' ? 'de' : 'en';
  }

}
