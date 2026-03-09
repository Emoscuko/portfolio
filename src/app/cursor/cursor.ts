import { Component, ElementRef, HostListener, OnInit, OnDestroy, signal, ViewChild, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-cursor',
    standalone: true,
    templateUrl: './cursor.html',
    styleUrl: './cursor.scss'
})
export class CursorComponent implements OnInit, OnDestroy {
    private router = inject(Router);

    @ViewChild('dot', { static: true }) dot!: ElementRef<HTMLDivElement>;

    private mouseX = -100;
    private mouseY = -100;
    private dotX = -100;
    private dotY = -100;

    opacity = signal(0);
    theme = signal<'dev' | 'fitness'>('dev');
    isHovering = signal(false);

    private cursorSpeed = 0.15;
    private animationFrameId: number = 0;

    ngOnInit() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: any) => {
                if (event.urlAfterRedirects.includes('/fitness')) {
                    this.theme.set('fitness');
                } else {
                    this.theme.set('dev');
                }
            });

        // Check initial route safely (for initial render)
        setTimeout(() => {
            if (this.router.url.includes('/fitness')) {
                this.theme.set('fitness');
            }
        }, 0);

        this.animate();
    }

    ngOnDestroy() {
        cancelAnimationFrame(this.animationFrameId);
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        if (this.opacity() === 0) {
            this.opacity.set(1);
            // Immediately jump to position if it was invisible
            this.dotX = event.clientX;
            this.dotY = event.clientY;
        }
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
    }

    @HostListener('document:mouseover', ['$event'])
    onMouseOver(event: MouseEvent) {
        const target = event.target as HTMLElement;
        const isClickable = !!target.closest('a, button, [routerLink], input, select, textarea, .nav-link, .split-screen-btn, .social-link');
        this.isHovering.set(isClickable);
    }

    @HostListener('document:mouseout', ['$event'])
    onMouseOut(event: MouseEvent) {
        // If we leave the document completely
        if (!event.relatedTarget) {
            this.opacity.set(0);
        }
    }

    private animate = () => {
        // Direct but slightly smoothed movement for dot to avoid jitter
        this.dotX += (this.mouseX - this.dotX) * 0.5;
        this.dotY += (this.mouseY - this.dotY) * 0.5;

        this.dot.nativeElement.style.transform = `translate3d(${this.dotX}px, ${this.dotY}px, 0)`;

        this.animationFrameId = requestAnimationFrame(this.animate);
    };
}
