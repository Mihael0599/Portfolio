import { Component } from '@angular/core';
import { ImagesCardComponent } from "./images-card/images-card.component";
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ImagesCardComponent, NgFor, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  imageData = [
    {imageSrc: 'assets/img/html-icon.png', text: 'HTML'},
    {imageSrc: 'assets/img/css-icon.png', text: 'CSS'},
    {imageSrc: 'assets/img/javascript-icon.png', text: 'JavaScript'},
    {imageSrc: 'assets/img/materialdesign-icon.png', text: 'Material Design'},
    {imageSrc: 'assets/img/typescript-icon.png', text: 'TypeScript'},
    {imageSrc: 'assets/img/angular-icon.png', text: 'Angular'},
    {imageSrc: 'assets/img/firebase-icon.png', text: 'Firebase'},
    {imageSrc: 'assets/img/git-icon.png', text: 'Git'},
    {imageSrc: 'assets/img/restapi-icon.png', text: 'Rest-Api'},
    {imageSrc: 'assets/img/scrum-icon.png', text: 'Scrum'},
    {imageSrc: 'assets/img/n8n.png', text: 'n8n'}
  ];

  hoveredSkill: any = null;


  onMouseEnter(img: any) {
    this.hoveredSkill = img;
  }

  onMouseLeave() {
    this.hoveredSkill = null;
  }


}

