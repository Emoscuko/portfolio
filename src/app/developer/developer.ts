import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TimelineComponent } from '../timeline/timeline';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { FooterComponent } from '../footer/footer';
import {
  DEVELOPER_SOCIALS,
  DEVELOPER_PROJECTS,
  DEVELOPER_SKILLS,
  DEVELOPER_TIMELINE,
  DEVELOPER_LABELS,
  DEVELOPER_HERO_SKILLS
} from '../data/developer.data';
import { LanguageService } from '../services/language';

@Component({
  selector: 'app-developer',
  imports: [RouterLink, TimelineComponent, ScrollRevealDirective, FooterComponent],
  templateUrl: './developer.html',
  styleUrl: './developer.scss'
})
export class Developer {
  socials = DEVELOPER_SOCIALS;
  projects = DEVELOPER_PROJECTS;
  skills = DEVELOPER_SKILLS;
  developerTimeline = DEVELOPER_TIMELINE;
  labels = DEVELOPER_LABELS;
  heroSkills = DEVELOPER_HERO_SKILLS;

  constructor(public langService: LanguageService) {}
}
