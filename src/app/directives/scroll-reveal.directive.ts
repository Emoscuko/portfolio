import { Directive, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appScrollReveal]',
    standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
    private observer!: IntersectionObserver;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        // Add the initial hidden class immediately
        this.renderer.addClass(this.el.nativeElement, 'scroll-reveal-hidden');

        if (typeof IntersectionObserver === 'undefined') {
            this.renderer.addClass(this.el.nativeElement, 'scroll-reveal-visible');
            return;
        }

        // Set up IntersectionObserver to detect when element is in viewport
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.renderer.addClass(this.el.nativeElement, 'scroll-reveal-visible');
                    // Stop observing once revealed so it doesn't replay backwards
                    this.observer.unobserve(this.el.nativeElement);
                }
            });
        }, {
            threshold: 0,
            rootMargin: '0px 0px -100px 0px'
        });

        // We use setTimeout to ensure Angular has rendered the element
        setTimeout(() => {
            this.observer.observe(this.el.nativeElement);
        });
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
