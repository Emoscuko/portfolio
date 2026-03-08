import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TimelineComponent } from '../timeline/timeline';
import { FITNESS_SOCIALS, WEEKLY_WORKOUT, DIET_PLAN, FITNESS_TIMELINE } from '../data/fitness.data';

@Component({
  selector: 'app-fitness',
  imports: [RouterLink, TimelineComponent],
  templateUrl: './fitness.html',
  styleUrl: './fitness.scss',
})
export class Fitness {
  socials = FITNESS_SOCIALS;
  weeklyWorkout = WEEKLY_WORKOUT;
  dietPlan = DIET_PLAN;
  fitnessTimeline = FITNESS_TIMELINE;
}
