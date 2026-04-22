import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, OnDestroy, PLATFORM_ID, signal, ViewChild, inject } from '@angular/core';
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
    private platformId = inject(PLATFORM_ID);
    private isBrowser = isPlatformBrowser(this.platformId);

    @ViewChild('dot', { static: true }) dot!: ElementRef<HTMLDivElement>;

    private mouseX = -100;
    private mouseY = -100;
    private dotX = -100;
    private dotY = -100;

    opacity = signal(0);
    theme = signal<'dev' | 'fitness' | 'home'>('home');
    isHovering = signal(false);

    private cursorSpeed = 0.15;
    private animationFrameId: number = 0;

    ngOnInit() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: any) => {
                const url = event.urlAfterRedirects;
                if (url.includes('/fitness')) {
                    this.theme.set('fitness');
                } else if (url === '/' || url === '') {
                    this.theme.set('home');
                } else {
                    this.theme.set('dev');
                }
            });

        // Check initial route safely (for initial render)
        setTimeout(() => {
            const url = this.router.url;
            if (url.includes('/fitness')) {
                this.theme.set('fitness');
            } else if (url === '/' || url === '') {
                this.theme.set('home');
            } else {
                this.theme.set('dev');
            }
        }, 0);

        if (this.isBrowser) {
            this.animate();
        }
    }

    ngOnDestroy() {
        if (this.isBrowser) {
            cancelAnimationFrame(this.animationFrameId);
        }
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
        // Hover-expand is disabled on the home page
        this.isHovering.set(this.theme() !== 'home' && isClickable);
    }

    @HostListener('document:mouseout', ['$event'])
    onMouseOut(event: MouseEvent) {
        // If we leave the document completely
        if (!event.relatedTarget) {
            this.opacity.set(0);
        }
    }

    private animate = () => {
        if (!this.isBrowser) {
            return;
        }

        // Direct but slightly smoothed movement for dot to avoid jitter
        this.dotX += (this.mouseX - this.dotX) * 0.5;
        this.dotY += (this.mouseY - this.dotY) * 0.5;

        this.dot.nativeElement.style.transform = `translate3d(${this.dotX}px, ${this.dotY}px, 0)`;

        this.animationFrameId = requestAnimationFrame(this.animate);
    };
}
