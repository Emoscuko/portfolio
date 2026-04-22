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
    status: string;
    statusTr: string;
    role: string;
    roleTr: string;
    impact: string;
    impactTr: string;
    highlights: string[];
    highlightsTr: string[];
    architecture: string[];
    featured?: boolean;
    mainImage?: string;
    primaryLinks?: SocialLink[];
    links?: SocialLink[];
}

export interface DeveloperSkill {
    id: string;
    title: string;
    summary: string;
    evidence: string[];
    keywords: string[];
    visualClass: string;
    featured?: boolean;
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
        id: "saferoads",
        title: "SafeRoads",
        titleTr: "SafeRoads",
        description: "A larger production-style road safety platform with mobile, web, backend, and automated Azure infrastructure working together.",
        descriptionTr: "Mobil, web, backend ve otomatik Azure altyapısını birlikte ele alan büyük ölçekli yol güvenliği platformu.",
        techStack: ["Azure DevOps", "Bicep", "Key Vault", "Flutter", "Angular", "Backend APIs", "CI/CD"],
        visualClass: "saferoads-card",
        status: "Infrastructure-heavy build",
        statusTr: "Altyapı odaklı proje",
        role: "Full-stack + Cloud Automation",
        roleTr: "Full-stack + Cloud Otomasyon",
        impact: "Designed around repeatable deployments, infrastructure as code, and a complete mobile/web/backend product surface.",
        impactTr: "Tekrarlanabilir deployment, infrastructure as code ve bütünlüklü mobil/web/backend ürün yüzeyi üzerine tasarlandı.",
        highlights: [
            "Azure DevOps pipeline for automated validation and deployment flow",
            "main.bicep driven resource provisioning with IaC discipline",
            "Key Vault centered secret management and cloud configuration awareness"
        ],
        highlightsTr: [
            "Otomatik doğrulama ve deployment akışı için Azure DevOps pipeline",
            "IaC disipliniyle main.bicep üzerinden kaynak oluşturma",
            "Key Vault merkezli secret yönetimi ve cloud configuration farkındalığı"
        ],
        architecture: ["Flutter Mobile", "Angular Web", "Backend APIs", "Azure DevOps", "Bicep", "Key Vault"],
        featured: true
    },
    {
        id: "ecommerce",
        title: "E-Commerce Website",
        titleTr: "E-Ticaret Website",
        description: "Currently developing a full-stack commerce experience with product, catalog, admin, and deployment concerns treated as one system.",
        descriptionTr: "Ürün, katalog, admin ve deployment taraflarını tek bir sistem olarak ele alan full-stack e-ticaret deneyimi geliştiriliyor.",
        techStack: ["Go", "Angular", "API Design", "SEO", "Indexing", "Deployment"],
        visualClass: "commerce-card",
        status: "Currently developing",
        statusTr: "Aktif geliştiriliyor",
        role: "Go-backed Full-stack",
        roleTr: "Go backend odaklı Full-stack",
        impact: "Shows the practical side of building a business-facing web product beyond isolated features.",
        impactTr: "Tekil feature'ların ötesinde iş odaklı bir web ürününü geliştirme pratiğini gösterir.",
        highlights: [
            "Go backend work powering the active e-commerce build",
            "Full-stack flow across frontend, backend APIs, product data, and release readiness",
            "SEO and indexing considered while shaping the public web surface"
        ],
        highlightsTr: [
            "Aktif e-ticaret geliştirmesini taşıyan Go backend çalışması",
            "Frontend, backend API'leri, ürün verisi ve release hazırlığı boyunca full-stack akış",
            "Public web yüzeyi tasarlanırken SEO ve indexleme dikkate alınıyor"
        ],
        architecture: ["Go", "Angular", "Product Catalog", "Admin Flow", "Deployment", "SEO"]
    },
    {
        id: "emirhanatar",
        title: "emirhanatar.com",
        titleTr: "emirhanatar.com",
        description: "Deployed personal platform with Angular SSR, structured metadata, sitemap, robots rules, canonical URLs, and indexing-focused SEO basics.",
        descriptionTr: "Angular SSR, structured metadata, sitemap, robots kuralları, canonical URL'ler ve indexleme odaklı SEO temelleriyle yayınlanan kişisel platform.",
        techStack: ["Angular SSR", "SEO", "JSON-LD", "Open Graph", "Sitemap", "Robots.txt"],
        visualClass: "seo-card",
        status: "Live and indexed",
        statusTr: "Yayında ve index odaklı",
        role: "Deployment + SEO",
        roleTr: "Deployment + SEO",
        impact: "Connects engineering craft with discoverability: deployability, metadata quality, and crawler-friendly structure.",
        impactTr: "Engineering pratiğini bulunabilirlikle birleştirir: deploy edilebilirlik, metadata kalitesi ve crawler dostu yapı.",
        highlights: [
            "Canonical, Open Graph, Twitter card, and JSON-LD metadata",
            "Sitemap and robots.txt configured for search engine discovery",
            "Production deployment experience on a real personal domain"
        ],
        highlightsTr: [
            "Canonical, Open Graph, Twitter card ve JSON-LD metadata",
            "Arama motoru keşfi için sitemap ve robots.txt yapılandırması",
            "Gerçek kişisel domain üzerinde production deployment deneyimi"
        ],
        architecture: ["Angular SSR", "Canonical", "JSON-LD", "Open Graph", "Sitemap", "Indexing"],
        primaryLinks: [
            {
                name: "Live Site",
                url: "https://emirhanatar.com",
                iconSrc: "https://cdn.simpleicons.org/googlechrome/00E5FF"
            }
        ]
    },
    {
        id: "unity-game",
        title: "Slime Hunter",
        titleTr: "Slime Hunter",
        description: "Published 2D shooter shipped to App Store and Google Play, kept as proof of product completion and Unity production experience.",
        descriptionTr: "App Store ve Google Play'e yayınlanmış 2D shooter; ürün tamamlama ve Unity production deneyimi kanıtı olarak konumlandırıldı.",
        techStack: ["Unity", "C#", "Mobile Release", "App Store", "Google Play"],
        visualClass: "unity-card",
        status: "Shipped mobile game",
        statusTr: "Yayınlanmış mobil oyun",
        role: "Unity Developer",
        roleTr: "Unity Developer",
        impact: "A finished public release with store presence, branding, and real distribution constraints.",
        impactTr: "Store varlığı, branding ve gerçek dağıtım kısıtları olan tamamlanmış public release.",
        highlights: [
            "Released on both App Store and Google Play",
            "Unity/C# gameplay implementation and mobile publishing flow",
            "Secondary skill signal that complements the full-stack profile"
        ],
        highlightsTr: [
            "App Store ve Google Play'de yayınlandı",
            "Unity/C# gameplay geliştirme ve mobil yayınlama akışı",
            "Full-stack profilini tamamlayan ikincil yetenek sinyali"
        ],
        architecture: ["Unity", "C#", "Mobile Build", "App Store", "Google Play"],
        mainImage: "/SlimeHunterIcon.png",
        primaryLinks: [
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
    }
];

export const DEVELOPER_HERO_SKILLS = [
    "Java-focused Full-Stack",
    "Cloud + CI/CD",
    "AI-assisted Workflows"
];

export const DEVELOPER_SKILLS: DeveloperSkill[] = [
    {
        id: "java-oop",
        title: "Java, OOP & Design Patterns",
        summary: "Java is the first object-oriented programming language I learned deeply, and it became the foundation for how I understand software structure.",
        evidence: [
            "Studied and practiced Java across two years of university coursework.",
            "Learned Object-Oriented Programming concepts through Java.",
            "Studied Design Patterns with Java examples and assignments."
        ],
        keywords: ["Java", "Object-Oriented Programming", "OOP", "Design Patterns", "Software Architecture"],
        visualClass: "java-skill",
        featured: true
    },
    {
        id: "full-stack",
        title: "Full-Stack Web Development",
        summary: "I started building full-stack web projects with Angular in an Advanced Web Development course and have kept using it across real projects since then.",
        evidence: [
            "Built my first Angular project during Advanced Web Development coursework.",
            "Used Angular for emirhanatar.com, my current Go-backed e-commerce website, and RevloAI internship work.",
            "Comfortable with SEO, indexing, metadata, and production web visibility basics."
        ],
        keywords: ["Angular", "Go", "Full-Stack Development", "API Design", "SEO", "Indexing"],
        visualClass: "fullstack-skill"
    },
    {
        id: "cloud-systems",
        title: "Cloud Systems & CI/CD",
        summary: "My cloud experience comes from coursework, internship ownership, and larger infrastructure work on SafeRoads.",
        evidence: [
            "Completed an Introduction to Cloud Computing course.",
            "Handled cloud resources during the RevloAI internship.",
            "Expanded Azure, CI/CD pipeline, IaC, and Bicep usage while building SafeRoads."
        ],
        keywords: ["Azure", "Azure DevOps", "CI/CD", "Infrastructure as Code", "Bicep", "Key Vault"],
        visualClass: "cloud-skill"
    },
    {
        id: "ai-llm",
        title: "AI, LLMs & Prompt Engineering",
        summary: "I have worked with LLM workflows from coursework to local model tests, cloud deployments, and Codex-style tool integrations.",
        evidence: [
            "Completed Introduction to AI and LLM coursework.",
            "Deployed and tested local models, then connected cloud-hosted services to agentic systems.",
            "Used prompt engineering, hooks, plugins, MCP, and RAG in projects."
        ],
        keywords: ["AI", "LLM", "Prompt Engineering", "MCP", "RAG", "Hooks", "Plugins"],
        visualClass: "ai-skill"
    },
    {
        id: "unity-game-dev",
        title: "Unity & Mobile Game Development",
        summary: "Game development started as a long-running personal curiosity from growing up around games, and I turned it into a shipped Unity project.",
        evidence: [
            "Built Slime Hunter as a learning-focused Unity project.",
            "Released the game on both the App Store and Google Play Store.",
            "Gained practical experience with Unity, C#, mobile builds, and store release constraints."
        ],
        keywords: ["Unity", "C#", "Mobile Game Development", "App Store", "Google Play", "Shipped Product"],
        visualClass: "unity-skill"
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
        subtitle: "Published Unity Project",
        subtitleTr: "Yayınlanmış Unity Projesi",
        description: "Developed and released 2D shooter game Slime Hunter on App Store and Google Play as a shipped-product Unity project.",
        descriptionTr: "2D shooter Slime Hunter'ı App Store ve Google Play'de yayınlayarak tamamlanmış bir Unity ürünü ortaya koydu.",
        type: "work",
        tags: ["Unity", "C#", "Mobile Release"],
        iconSrc: "/SlimeHunterIcon.png",
    },

    {
        year: "2026",
        title: "Full-Stack Developer",
        titleTr: "Full-Stack Geliştirici",
        subtitle: "Java, AI Workflows, Cloud Deployment",
        subtitleTr: "Java, AI Akışları, Cloud Deployment",
        description: "Currently developing a Go-backed e-commerce website and running emirhanatar.com as a deployed, indexing-aware platform while growing advanced Java, prompt engineering, hooks, plugins, CI/CD, Azure, SEO, and production deployment skills.",
        descriptionTr: "Aktif olarak Go backend'li bir e-ticaret sitesi geliştiriyor ve emirhanatar.com'u deploy edilmiş, indexleme odaklı bir platform olarak yönetiyor; Java, prompt engineering, hooklar, pluginler, CI/CD, Azure, SEO ve production deployment becerilerini ileri seviyeye taşıyor.",
        type: "work",
        tags: ["Java", "Go", "Full-Stack", "Prompt Engineering", "Azure", "CI/CD", "SEO", "Unity"],
    }
];

export const DEVELOPER_LABELS = {
    mainPage: { en: 'Main Page', tr: 'Ana Sayfa' },
    skills: { en: 'Skills', tr: 'Skills' },
    projects: { en: 'Projects', tr: 'Projeler' },
    journey: { en: 'Journey', tr: 'Yolculuk' },
    heroEyebrow: { en: 'PORTFOLIO · DEVELOPER', tr: 'PORTFOLYO · GELİŞTİRİCİ' },
    heroTagline: { en: 'Full-Stack Developer focused on Java, AI-assisted workflows, cloud deployments, prompt engineering, and production web systems.', tr: 'Java, prompt engineering, AI destekli geliştirme akışları, cloud deployment ve production web sistemleri üzerine çalışan Full-Stack Developer.' },
    exploreWork: { en: 'Explore My Work', tr: 'Çalışmalarımı İncele' },
    exploreSkills: { en: 'Explore Skills', tr: 'Explore Skills' },
    skillsEyebrow: { en: 'TECHNICAL SKILLS', tr: 'TECHNICAL SKILLS' },
    skillsTitle: { en: 'Skills', tr: 'Skills' },
    skillsSubtitle: { en: 'Technologies and engineering areas I have learned through coursework, internships, shipped products, and active projects.', tr: 'Technologies and engineering areas I have learned through coursework, internships, shipped products, and active projects.' },
    evidenceLabel: { en: 'Evidence', tr: 'Evidence' },
    keywordsLabel: { en: 'Keywords', tr: 'Keywords' },
    projectsEyebrow: { en: 'SELECTED ENGINEERING WORK', tr: 'SEÇİLMİŞ MÜHENDİSLİK İŞLERİ' },
    projectsTitle: { en: 'Projects with architecture, deployment, and product thinking.', tr: 'Mimari, deployment ve ürün düşüncesi taşıyan projeler.' },
    projectsSubtitle: { en: 'A more technical look at the systems I am building: infrastructure automation, Go-backed commerce work, SEO/indexing, and a shipped Unity product.', tr: 'Geliştirdiğim sistemlere daha teknik bir bakış: altyapı otomasyonu, Go backend odaklı e-ticaret çalışması, SEO/indexleme ve yayınlanmış Unity ürünü.' },
    architectureLabel: { en: 'Architecture', tr: 'Mimari' },
    highlightsLabel: { en: 'Signals', tr: 'Sinyaller' },
    stackLabel: { en: 'Stack', tr: 'Stack' },
    timelineTitle: { en: 'Engineering Journey', tr: 'Mühendislik Yolculuğu' },
    timelineSubtitle: { en: 'CAREER TIMELINE', tr: 'KARİYER ZAMAN ÇİZELGESİ' }
};
