import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  projectData = [
    {projectName: 'Join', text: ['Angular | TypeScript | HTML | CSS | Firebas']},
    {projectName: 'El Pollo Loco', text: ['HTML | CSS | JavaScript']},
    {projectName: 'DA Bubble', text: ['Angular | TypeScript | Firebas']},
  ];

}
