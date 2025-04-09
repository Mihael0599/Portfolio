import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GlobalDataService } from '../../global-data.service';
import { TranslateModule } from '@ngx-translate/core';
import { BurgermenuComponent } from './burgermenu/burgermenu.component';
import { LanguageSwitchComponent } from "./language-switch/language-switch.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, BurgermenuComponent, LanguageSwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  active = false;

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

  toggleMenu() {
    this.active = !this.active;
  }

}
