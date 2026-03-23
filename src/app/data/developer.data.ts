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
    titleTr: string;
    description: string;
    descriptionTr: string;
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
        title: "Slime Hunter",
        titleTr: "Slime Hunter",
        description: "2D Shooter game released on App Store and Google Play.",
        descriptionTr: "App Store ve Google Play'de yayınlanan 2D Shooter oyunu.",
        techStack: ["C#", "Unity"],
        visualClass: "unity-card",
        mainImage: "/SlimeHunterIcon.png",
        links: [
            {
                name: "App Store",
                url: "https://apps.apple.com/tr/app/slime-hunter/id6759782275",
                iconSrc: "https://cdn.simpleicons.org/appstore/007AFF",
                cssClass: "game-link"
            },
            {
                name: "Google Play",
                url: "https://play.google.com/store/apps/details?id=com.pixelcorsairs.slimehunter&pli=1",
                iconSrc: "https://cdn.simpleicons.org/googleplay/41BA7A",
                cssClass: "game-link"
            },
            {
                name: "Instagram",
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
        titleTr: "Full-Stack Mikroservisler",
        description: "Led a backend rewrite migrating a monolithic Node.js application to Go microservices, increasing throughput by 5x and lowering latency.",
        descriptionTr: "Monolitik bir Node.js uygulamasını Go mikroservislerine taşıyarak arka uç yeniden yazımına liderlik etti, verimliliği 5 kat artırdı ve gecikme süresini düşürdü.",
        techStack: ["Go", "gRPC", "Kubernetes", "Angular"],
        visualClass: "fullstack-card"
    }
];

export const DEVELOPER_TIMELINE: TimelineItem[] = [
    {
        year: "2016 — 2020",
        title: "High School",
        titleTr: "Lise",
        subtitle: "Şefkat High School",
        subtitleTr: "Şefkat Fen Lisesi",
        description: "Started high school education in Istanbul.",
        descriptionTr: "İstanbul'da lise eğitimine başladı.",
        type: "education",
    },
    {
        year: "2020 - 2022",
        title: "Medicine Faculty",
        titleTr: "Tıp Fakültesi",
        subtitle: "Istanbul Yeniyuzyil University",
        subtitleTr: "İstanbul Yeni Yüzyıl Üniversitesi",
        description: "Apperantly this was a wrong choice for me, but i had very good time since im also into health.",
        descriptionTr: "Görünüşe göre bu benim için yanlış bir seçimdi, ancak sağlığa da ilgi duyduğum için çok iyi vakit geçirdim.",
        type: "education",
        iconSrc: "/CaduceusIcon.jpg.avif",
    },
    {
        year: "2022",
        title: "Computer Engineering",
        titleTr: "Bilgisayar Mühendisliği",
        subtitle: "Akdeniz University",
        subtitleTr: "Akdeniz Üniversitesi",
        description: "Bachelor's degree in Computer Engineering. Focusing on how to actually learn.",
        descriptionTr: "Bilgisayar Mühendisliği Lisans derecesi. Asıl olarak nasıl öğrenileceğine odaklanıyor.",
        type: "education",
    },

    {
        year: "2025",
        title: "RevloAI Internship",
        titleTr: "RevloAI Stajı",
        subtitle: "Azure and Backend Intern",
        subtitleTr: "Azure ve Backend Stajyeri",
        description: "Architected an Azure-based backend for a hospitality analytics platform, utilizing AI-driven sentiment and intent analysis to transform guest feedback into actionable insights and automated operational recommendations.",
        descriptionTr: "Misafir geri bildirimlerini eyleme dönüştürülebilir içgörülere ve otomatik operasyonel önerilere dönüştürmek için yapay zeka odaklı duygu ve niyet analizini kullanan bir konaklama analitiği platformu için Azure tabanlı bir arka uç mimarisi oluşturdu.",
        type: "work",
        tags: ["Internship", "Azure", "Backend", "Go"],
        iconSrc: "/RevloAiIcon.jpeg",
    },

    {
        year: "2025",
        title: "Slime Hunter",
        titleTr: "Slime Hunter",
        subtitle: "Game Developer",
        subtitleTr: "Oyun Geliştirici",
        description: "Developed and released 2D shooter game Slime Hunter on App Store and Google Play.",
        descriptionTr: "2D shooter oyunu Slime Hunter'ı geliştirdi ve App Store ile Google Play'de yayınladı.",
        type: "work",
        tags: ["Game Development", "Unity", "C#"],
        iconSrc: "/SlimeHunterIcon.png",
    },

    {
        year: "2026",
        title: "Full-Stack Developer",
        titleTr: "Full-Stack Geliştirici",
        subtitle: "Full-Stack Developer, Game Developer",
        subtitleTr: "Full-Stack Geliştirici, Oyun Geliştirici",
        description: "Working on Full-Stack technologies (.NET, Angular, Go, Azure) and Unity Game Development.",
        descriptionTr: "Full-Stack teknolojileri (.NET, Angular, Go, Azure) ve Unity Oyun Geliştirme üzerinde çalışıyor.",
        type: "work",
        tags: ["Full-Stack", "Angular", "Backend", "Go", "Unity", "Game Development"],
    }
];

export const DEVELOPER_LABELS = {
    mainPage: { en: 'Main Page', tr: 'Ana Sayfa' },
    projects: { en: 'Projects', tr: 'Projeler' },
    journey: { en: 'Journey', tr: 'Yolculuk' },
    heroEyebrow: { en: 'PORTFOLIO · DEVELOPER', tr: 'PORTFOLYO · GELİŞTİRİCİ' },
    heroTagline: { en: 'Full-Stack & Game Developer — crafting scalable backend systems and immersive interactive experiences.', tr: 'Full-Stack ve Oyun Geliştirici — ölçeklenebilir arka uç sistemleri ve sürükleyici etkileşimli deneyimler hazırlar.' },
    exploreWork: { en: 'Explore My Work', tr: 'Çalışmalarımı İncele' },
    timelineTitle: { en: 'Engineering Journey', tr: 'Mühendislik Yolculuğu' },
    timelineSubtitle: { en: 'CAREER TIMELINE', tr: 'KARİYER ZAMAN ÇİZELGESİ' }
};
