import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NgFor, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, TranslateModule, ProjectModalComponent, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      projectName: 'Pokedex',
      skills: ['JavaScript', 'CSS', 'HTML'],
      imageURL: 'assets/img/dabubble.png',
      imageModal: 'assets/img/pokedex-modulo.png',
      description: 'projects.daBubble.description',
      githubLink: 'https://github.com/Mihael0599/Pokedex-with-React',
      liveTestLink: 'https://mihael-drazic.de/Pokedex/'
    },
    {
      projectName: 'Join',
      skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      imageURL: 'assets/img/join.png',
      imageModal: 'assets/img/join-modal.png',
      description: 'projects.join.description',
      githubLink: 'https://github.com/Mihael0599/Join',
      liveTestLink: 'https://mihael-drazic.de/Join/'
    },
    {
      projectName: 'El Pollo Loco',
      skills: ['HTML', 'CSS', 'JavaScript'],
      imageURL: 'assets/img/elpolloloco.png',
      imageModal: 'assets/img/elpolloloco-modal.png',
      description: 'projects.elPolloLoco.description',
      githubLink: 'https://github.com/Mihael0599/El-Pollo-Loco',
      liveTestLink: 'https://mihael-drazic.de/ElPolloLoco/'
    },
  ];

  selectedIndex: number | null = null;
  selectedProject: any = null;
  showModal: boolean = false;

  openModal(index: number) {
    this.selectedIndex = index;
    this.selectedProject = this.projects[index];
    this.showModal = true;
  }

  closeModal() {
    this.selectedIndex = null;
    this.selectedProject = null;
    this.showModal = false;
  }
}
