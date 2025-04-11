import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GlobalDataService } from '../../global-data.service';
import { TranslateModule } from '@ngx-translate/core';
import { BurgermenuComponent } from './burgermenu/burgermenu.component';
import { LanguageSwitchComponent } from "./language-switch/language-switch.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, BurgermenuComponent, LanguageSwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  active = false;
  currentRoute: string | undefined;

  changeLogo: boolean = false;
  hoveredIndex: number | null = null;
  ishovered: boolean = false;

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

  toggleMenu() {
    this.active = !this.active;
  }

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  isAnotherPage(): boolean{
    return this.currentRoute ==='/imprint' || this.currentRoute === '/privacyPolicy'
  }

}
