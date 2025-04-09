import { Component, inject } from '@angular/core';
import { GlobalDataService } from './../../../global-data.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [NgClass],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss'
})
export class LanguageSwitchComponent {

  globalData = inject(GlobalDataService);

  toggleLanguage() {
    this.globalData.switchLanguage();
  }
  
  isLang(lang: string): boolean {
    return this.globalData.currentLang === lang;
  }
}
