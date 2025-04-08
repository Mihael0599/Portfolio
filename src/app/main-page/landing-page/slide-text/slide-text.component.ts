import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-slide-text',
  standalone: true,
  imports: [NgFor, NgIf, TranslateModule],
  templateUrl: './slide-text.component.html',
  styleUrl: './slide-text.component.scss'
})
export class SlideTextComponent {

  items: string[] = [
    'frontendDeveloper',
    'openToWork',
    'availableRemote',
    'basedInSpaichingen',
  ];

}
