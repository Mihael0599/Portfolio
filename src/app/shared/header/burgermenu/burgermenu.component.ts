import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitchComponent } from "../language-switch/language-switch.component";

@Component({
  selector: 'app-burgermenu',
  standalone: true,
  imports: [TranslateModule, LanguageSwitchComponent],
  templateUrl: './burgermenu.component.html',
  styleUrl: './burgermenu.component.scss'
})
export class BurgermenuComponent {

  active = false;

  toggleMenu() {
    this.active = !this.active;

  }

  closeMenu(checkbox: HTMLInputElement){
    checkbox.checked = false;
    this.active = false;
  }
}
