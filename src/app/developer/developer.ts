import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TimelineComponent } from '../timeline/timeline';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { DEVELOPER_SOCIALS, DEVELOPER_PROJECTS, DEVELOPER_TIMELINE } from '../data/developer.data';

@Component({
  selector: 'app-developer',
  imports: [RouterLink, TimelineComponent, ScrollRevealDirective],
  templateUrl: './developer.html',
  styleUrl: './developer.scss'
})
export class Developer {
  socials = DEVELOPER_SOCIALS;
  projects = DEVELOPER_PROJECTS;
  developerTimeline = DEVELOPER_TIMELINE;
}
