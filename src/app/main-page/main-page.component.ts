import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';

import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OppinionAboutMeComponent } from "./oppinion-about-me/oppinion-about-me.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, ContactMeComponent, OppinionAboutMeComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
