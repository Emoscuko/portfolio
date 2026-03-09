import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.html',
    styleUrl: './footer.scss',
    animations: [
        trigger('reveal', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(20px)' }),
                animate('0.6s 0.2s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ])
    ]
})
export class FooterComponent {
    @Input() theme: 'cyber' | 'fitness' = 'cyber';

    currentYear = new Date().getFullYear();

    get socialLinks() {
        if (this.theme === 'fitness') {
            return [
                { name: 'Instagram', url: 'https://www.instagram.com/minimpekka/', iconSrc: 'https://cdn.simpleicons.org/instagram/E4405F' },
                { name: 'TikTok', url: 'https://www.tiktok.com/@emirhannatar', iconSrc: 'https://cdn.simpleicons.org/tiktok/E0E0E0' },
                { name: 'YouTube', url: 'https://www.youtube.com/@emirhannatar', iconSrc: 'https://cdn.simpleicons.org/youtube/FF0000' },
                { name: 'Email', url: 'mailto:emirhannatar@gmail.com', iconSrc: 'https://cdn.simpleicons.org/gmail/D14836' }
            ];
        }
        return [
            { name: 'GitHub', url: 'https://github.com/Emoscuko', iconSrc: 'https://cdn.simpleicons.org/github/E0E0E0' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/emirhan-atar-26a374309/', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg' },
            { name: 'Instagram', url: 'https://www.instagram.com/emirhanatar/', iconSrc: 'https://cdn.simpleicons.org/instagram/E4405F' },
            { name: 'Email', url: 'mailto:emirhannatar@gmail.com', iconSrc: 'https://cdn.simpleicons.org/gmail/D14836' }
        ];
    }

    get footerText() {
        if (this.theme === 'fitness') {
            return {
                tagline: 'FITNESS LOG',
                title1: 'Push your',
                title2: 'limits',
                description: 'Always looking to break personal records and share fitness knowledge. Feel free to connect for a workout or form check!'
            };
        }
        return {
            tagline: 'PROJECT TERMINAL',
            title1: 'Let\'s build something',
            title2: 'exceptional',
            description: 'I\'m always open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!'
        };
    }

    get themeColor() {
        return this.theme === 'cyber' ? '#00e5ff' : '#ff5e00';
    }
}
