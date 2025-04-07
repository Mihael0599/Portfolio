import { CurrencyPipe, DatePipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, NgIf, DecimalPipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  projectData = [
    { projectName: 'Join', text: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebas'], imageURL: 'assets/img/join.png' },
    { projectName: 'El Pollo Loco', text: ['HTML', 'CSS', 'JavaScript'], imageURL: 'assets/img/elpolloloco.png' },
    { projectName: 'DA Bubble', text: ['Angular', 'TypeScript', 'Firebase'], imageURL: 'assets/img/dabubble.png' },
  ];

  selectedProject: any = null;
  selectedIndex: number | null = null;
  showModal: boolean = false;
  hoverIndex: number | null = null;
  hoveredProject: any = null;


  onProjectHover(project: any) {
    this.hoveredProject = project;
  }

  onMouseEnter(project: any) {
    this.hoveredProject = project;
  }

  onMouseLeave() {
    this.hoveredProject = null;
  }

  openModal(project: any, index: number) {
    this.selectedProject = project;
    this.selectedIndex = index;
    this.showModal = true;
  }

}
