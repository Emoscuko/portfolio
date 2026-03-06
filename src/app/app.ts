import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, query, animate, group } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        opacity: 0
      })
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0 })
    ], { optional: true }),
    query(':leave', [
      animate('400ms ease-in-out', style({ opacity: 0 }))
    ], { optional: true }),
    query(':enter', [
      animate('400ms ease-in-out', style({ opacity: 1 }))
    ], { optional: true })
  ])
]);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [slideInAnimation]
})
export class App {
  protected readonly title = signal('dual-portfolio');

  getDepth(outlet: RouterOutlet) {
    return outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
