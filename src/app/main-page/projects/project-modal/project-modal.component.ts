import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [NgIf, DecimalPipe, NgFor],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {

  iconMap: { [key: string]: string } = {
    Angular: 'assets/img/angular-icon-color.png',
    TypeScript: 'assets/img/typescript-icon-color.png',
    Firebase: 'assets/img/firebase-icon-color.png',
    JavaScript: 'assets/img/javascript-icon-color.png',
    HTML: 'assets/img/html-icon-color.png',
    CSS: 'assets/img/css-icon-color.png',
  };

  @Input() selectedIndex: number | null = null;
  @Input() selectedProject: any = null;
  @Input() projectData: any[] = [];

  @Output() close = new EventEmitter<void>();

  getSkillIcon(skills: string): string {
    return this.iconMap[skills];
  }

  onClose() {
    this.close.emit();
  }
  
}
