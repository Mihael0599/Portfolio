import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  currentLang = localStorage.getItem('language') || 'en';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'de', 'hr']); 
    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
  }

  setLanguage(lang: string) {
    if (['en', 'de', 'hr'].includes(lang)) {
      this.currentLang = lang;
      this.translate.use(lang);
      localStorage.setItem('language', lang);
    }
  }
  
  isLang(lang: string): boolean {
    return this.currentLang === lang;
  }
}