import { Component, HostListener, signal, inject, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-scroll-progress',
    standalone: true,
    templateUrl: './scroll-progress.html',
    styleUrl: './scroll-progress.scss'
})
export class ScrollProgressComponent implements OnInit {
    progress = signal(0);
    theme = signal<'dev' | 'fitness'>('dev');
    private router = inject(Router);

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

        setTimeout(() => {
            if (this.router.url.includes('/fitness')) {
                this.theme.set('fitness');
            }
        }, 0);
    }

    @HostListener('window:scroll')
    onWindowScroll() {
        const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        // Safely calculate total scrollable height across all major browser interpretations
        const docHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        const windowHeight = document.documentElement.clientHeight || window.innerHeight;
        const scrollHeight = docHeight - windowHeight;

        // Calculate percentage (0 to 100) safely
        let percentage = scrollHeight > 0 ? (scrollPosition / scrollHeight) * 100 : 0;

        // Ensure boundaries
        percentage = Math.max(0, Math.min(percentage, 100));

        this.progress.set(percentage);
    }
}
