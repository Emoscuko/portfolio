import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    opacity: number;
}

@Component({
    selector: 'app-particle-field',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './particle-field.html',
    styleUrl: './particle-field.scss'
})
export class ParticleFieldComponent implements OnInit, OnDestroy {
    @Input() theme: 'flux' | 'embers' = 'flux';
    @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

    private ctx!: CanvasRenderingContext2D;
    private particles: Particle[] = [];
    private animationId: number = 0;
    private mouseX: number = -1000;
    private mouseY: number = -1000;

    constructor() { }

    ngOnInit(): void {
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
        this.resize();
        this.initParticles();
        this.animate();
    }

    ngOnDestroy(): void {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }

    @HostListener('window:resize')
    onResize(): void {
        this.resize();
        this.initParticles();
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent): void {
        const rect = this.canvasRef.nativeElement.getBoundingClientRect();
        this.mouseX = event.clientX - rect.left;
        this.mouseY = event.clientY - rect.top;
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.mouseX = -1000;
        this.mouseY = -1000;
    }

    private resize(): void {
        const canvas = this.canvasRef.nativeElement;
        const rect = canvas.parentElement?.getBoundingClientRect();
        if (rect) {
            canvas.width = rect.width;
            canvas.height = rect.height;
        }
    }

    private initParticles(): void {
        this.particles = [];
        const count = this.theme === 'flux' ? 60 : 40;
        const color = this.theme === 'flux' ? '#00E5FF' : '#FF5E00';

        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvasRef.nativeElement.width,
                y: Math.random() * this.canvasRef.nativeElement.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                color: color,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    private animate(): void {
        this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
        
        this.particles.forEach((p, i) => {
            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Boundary check
            if (p.x < 0) p.x = this.canvasRef.nativeElement.width;
            if (p.x > this.canvasRef.nativeElement.width) p.x = 0;
            if (p.y < 0) p.y = this.canvasRef.nativeElement.height;
            if (p.y > this.canvasRef.nativeElement.height) p.y = 0;

            // Mouse interaction
            const dx = this.mouseX - p.x;
            const dy = this.mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 150) {
                const force = (150 - dist) / 1500;
                p.vx += dx * force * 0.2;
                p.vy += dy * force * 0.2;
                
                // Cap speed
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (speed > 2) {
                    p.vx = (p.vx / speed) * 2;
                    p.vy = (p.vy / speed) * 2;
                }
            }

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.opacity;
            this.ctx.fill();

            // Draw connections (flux theme only)
            if (this.theme === 'flux') {
                for (let j = i + 1; j < this.particles.length; j++) {
                    const p2 = this.particles[j];
                    const dx2 = p.x - p2.x;
                    const dy2 = p.y - p2.y;
                    const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                    if (dist2 < 120) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(p.x, p.y);
                        this.ctx.lineTo(p2.x, p2.y);
                        this.ctx.strokeStyle = p.color;
                        this.ctx.globalAlpha = (120 - dist2) / 120 * 0.15;
                        this.ctx.stroke();
                    }
                }
            }
        });

        this.animationId = requestAnimationFrame(() => this.animate());
    }
}
