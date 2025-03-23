import { Component } from '@angular/core';
import { ImagesCardComponent } from "./images-card/images-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ImagesCardComponent, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  imageData = [
    {imageSrc: 'assets/html-icon.png', text: 'HTML'},
    {imageSrc: 'assets/css-icon.png', text: 'CSS'},
    {imageSrc: 'assets/javascript-icon.png', text: 'JavaScript'},
    {imageSrc: 'assets/materialdesign-icon.png', text: 'Material Design'},
    {imageSrc: 'assets/typescript-icon.png', text: 'TypeScript'},
    {imageSrc: 'assets/angular-icon.png', text: 'Angular'},
    {imageSrc: 'assets/firebase-icon.png', text: 'Firebase'},
    {imageSrc: 'assets/git-icon.png', text: 'Git'},
    {imageSrc: 'assets/restapi-icon.png', text: 'Rest-Api'},
    {imageSrc: 'assets/scrum-icon.png', text: 'Scrum'},
    {imageSrc: 'assets/mindset-icon.png', text: 'Growth mindset'}
  ];
}
