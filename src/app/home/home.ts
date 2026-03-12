import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ParticleFieldComponent } from './particle-field/particle-field';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, ParticleFieldComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  @ViewChild('splitContainer', { static: true }) container!: ElementRef;

  devTilt = { x: 0, y: 0 };
  fitTilt = { x: 0, y: 0 };

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Calculate normalized position (-1 to 1)
    const normX = (e.clientX / width) * 2 - 1;
    const normY = (e.clientY / height) * 2 - 1;

    // Apply different strengths for dev and fitness sides
    const maxTilt = 10;
    
    if (e.clientX < width / 2) {
      // Dev Side Tilt
      this.devTilt = {
        x: -normY * maxTilt,
        y: normX * maxTilt
      };
      this.fitTilt = { x: 0, y: 0 };
    } else {
      // Fitness Side Tilt
      this.fitTilt = {
        x: -normY * maxTilt,
        y: normX * maxTilt
      };
      this.devTilt = { x: 0, y: 0 };
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.devTilt = { x: 0, y: 0 };
    this.fitTilt = { x: 0, y: 0 };
  }
}
