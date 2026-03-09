// timeline.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

export interface TimelineItem {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    type: "education" | "work" | "certification";
    tags?: string[];
    iconSrc?: string;
}

@Component({
    selector: 'app-timeline',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective],
    templateUrl: './timeline.html',
    styleUrl: './timeline.scss'
})
export class TimelineComponent {
    @Input() title: string = "Journey";
    @Input() subtitle: string = "TIMELINE";
    @Input() items: TimelineItem[] = [];
    @Input() theme: "cyber" | "fitness" = "cyber";

    getTypeConfig(type: string) {
        if (this.theme === 'cyber') {
            const configs: Record<string, any> = {
                education: { icon: '🎓', color: "#00ff41", label: "EDUCATION" },
                work: { icon: '💻', color: "#00f3ff", label: "WORK" },
                certification: { icon: '📜', color: "#f59e0b", label: "CERT" },
            };
            return configs[type] || configs['work'];
        } else {
            const configs: Record<string, any> = {
                education: { icon: '📚', color: "#ff4b4b", label: "LEARNING" },
                work: { icon: '🏋️', color: "#ffb300", label: "COMPETE" },
                certification: { icon: '🥇', color: "#00e5ff", label: "ACHIEVE" },
            };
            return configs[type] || configs['work'];
        }
    }
}
