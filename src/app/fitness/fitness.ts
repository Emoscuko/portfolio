import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TimelineComponent } from '../timeline/timeline';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { FooterComponent } from '../footer/footer';
import { FITNESS_SOCIALS, WEEKLY_WORKOUT, DIET_PLAN, FITNESS_TIMELINE, HOBBIES, FITNESS_LABELS } from '../data/fitness.data';
import { LanguageService } from '../services/language';

@Component({
  selector: 'app-fitness',
  imports: [RouterLink, TimelineComponent, ScrollRevealDirective, FooterComponent],
  templateUrl: './fitness.html',
  styleUrl: './fitness.scss',
})
export class Fitness {
  socials = FITNESS_SOCIALS;
  weeklyWorkout = WEEKLY_WORKOUT;
  dietPlan = DIET_PLAN;
  fitnessTimeline = FITNESS_TIMELINE;
  hobbies = HOBBIES;
  labels = FITNESS_LABELS;

  constructor(public langService: LanguageService) {}
}
