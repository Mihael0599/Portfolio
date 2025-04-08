import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectModalComponent } from "../project-modal/project-modal.component";
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, NgIf, ProjectModalComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  projectData = [
    { projectName: 'Join', skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'], imageURL: 'assets/img/join.png', description: 'projects.join.description' },
    { projectName: 'El Pollo Loco', skills: ['HTML', 'CSS', 'JavaScript'], imageURL: 'assets/img/elpolloloco.png', description: 'projects.elPolloLoco.description' },
    { projectName: 'DA Bubble', skills: ['Angular', 'TypeScript', 'Firebase'], imageURL: 'assets/img/dabubble.png', description: 'projects.daBubble.description' },
  ];

  hoverIndex: number | null = null;
  hoveredProject: any = null;

  showModal: boolean = false;
  selectedIndex: number | null = null;
  selectedProject: any = null;
  
  openModal(index: number) {
    this.selectedIndex = index;
    this.selectedProject = this.projectData[index];
    this.showModal = true;
  }

  closeModal(){
    this.selectedIndex = null;
    this.selectedProject = null;
    this.showModal = false;
  }

  onProjectHover(project: any) {
    this.hoveredProject = project;
  }

  onMouseEnter(project: any) {
    this.hoveredProject = project;
  }

  onMouseLeave() {
    this.hoveredProject = null;
  }

}
