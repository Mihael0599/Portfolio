import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectModalComponent } from "../project-modal/project-modal.component";
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})

export class ProjectCardComponent {
  @Input() projects: any[] = [];

  @Output() open = new EventEmitter<number>();

  hoverIndex: number | null = null;
  hoveredProject: any = null;

  onMouseEnter(project: any) {
    this.hoveredProject = project;
  }

  onMouseLeave() {
    this.hoveredProject = null;
  }

  openModal(index: number) {
    this.open.emit(index); 
  }
}
