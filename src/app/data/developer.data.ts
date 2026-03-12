import { TimelineItem } from '../timeline/timeline';

export interface SocialLink {
    name: string;
    url: string;
    iconSrc: string;
    cssClass?: string;
}

export interface ProjectCard {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    visualClass: string;
    hasCustomTable?: boolean;
    mainImage?: string;
    links?: SocialLink[];
}

export const DEVELOPER_SOCIALS: SocialLink[] = [
    {
        name: "GitHub (Emoscuko)",
        url: "https://github.com/Emoscuko",
        iconSrc: "https://cdn.simpleicons.org/github/E0E0E0",
        cssClass: ""
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/emirhan-atar-26a374309/",
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
        cssClass: ""
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/u/Emoscuko/",
        iconSrc: "https://cdn.simpleicons.org/leetcode/FFA116",
        cssClass: ""
    }
];

export const DEVELOPER_PROJECTS: ProjectCard[] = [
    {
        id: "unity-game",
        title: "Unity Game Development",
        description: "Current work Slime Hunter 2D Shooter game with my friend.",
        techStack: ["C#", "Unity"],
        visualClass: "unity-card",
        mainImage: "/SlimeHunterIcon.png",
        links: [
            {
                name: "SlimeHunter",
                url: "https://play.google.com/store/apps/details?id=com.pixelcorsairs.slimehunter&pli=1",
                iconSrc: "https://cdn.simpleicons.org/googleplay/41BA7A",
                cssClass: "game-link"
            },
            {
                name: "SlimeHunter",
                url: "https://www.instagram.com/slimehunter2026/",
                iconSrc: "https://cdn.simpleicons.org/instagram/E4405F",
                cssClass: "game-link"
            },
            {
                name: "Abdullah Sevinç",
                url: "https://www.linkedin.com/in/abdullah-sevin%C3%A7-6387bb339/",
                iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
                cssClass: "game-link"
            }
        ]
    },
    {
        id: "microservices",
        title: "Full-Stack Microservices",
        description: "Led a backend rewrite migrating a monolithic Node.js application to Go microservices, increasing throughput by 5x and lowering latency.",
        techStack: ["Go", "gRPC", "Kubernetes", "Angular"],
        visualClass: "fullstack-card"
    }
];

export const DEVELOPER_TIMELINE: TimelineItem[] = [
    {
        year: "2016 — 2020",
        title: "High School",
        subtitle: "Şefkat High School",
        description: "Started high school education in Istanbul.",
        type: "education",
    },
    {
        year: "2020 - 2022",
        title: "Medicine Faculty",
        subtitle: "Got into Istanbul Yeniyuzyil University Medicine Faculty",
        description: "Apperantly this was a wrong choice for me, but i had very good time since im also into health.",
        type: "education",
        iconSrc: "/CaduceusIcon.jpg.avif",
    },
    {
        year: "2022",
        title: "Computer Engineering",
        subtitle: "Akdeniz University",
        description: "Bachelor's degree in Computer Engineering. Focusing on how to actually learn.",
        type: "education",
    },

    {
        year: "2025",
        title: "RevloAI Internship",
        subtitle: "Azure and Backend (Golang) Intern",
        description: "Architected an Azure-based backend for a hospitality analytics platform, utilizing AI-driven sentiment and intent analysis to transform guest feedback into actionable insights and automated operational recommendations.",
        type: "work",
        tags: ["Internship", "Azure", "Backend", "Go"],
        iconSrc: "/RevloAiIcon.jpeg",
    },

    {
        year: "2025",
        title: "Slime Hunter",
        subtitle: "Game Developer",
        description: "Developing a 2D game called Slime Hunter for learning purposes.",
        type: "work",
        tags: ["Game Development", "Unity", "C#"],
        iconSrc: "/SlimeHunterIcon.png",
    },

    {
        year: "2026 - Present",
        title: "Full-Stack Developer",
        subtitle: "Full-Stack Developer, Unity Game Developer",
        description: "Working on Full-Stack technologies (.NET, Angular, Go, Azure) and Unity Game Development.",
        type: "work",
        tags: ["Full-Stack", "Angular", "Backend", "Go", "Unity", "Game Development"],
    }
];
