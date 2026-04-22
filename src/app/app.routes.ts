import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Developer } from './developer/developer';
import { Fitness } from './fitness/fitness';
import type { SeoRouteData } from './services/seo';

const homeSeo: SeoRouteData = {
    title: 'Emirhan Atar | Full-Stack Developer',
    description: 'Official portfolio of Emirhan Atar, a Java-focused full-stack developer working with OOP, Design Patterns, Go, Angular, Azure, CI/CD, prompt engineering, MCP, RAG, SEO, indexing, and Unity.',
    path: '/',
    keywords: 'Emirhan Atar, emirhanatar, full-stack developer, Java developer, Object-Oriented Programming, OOP, Design Patterns, Go developer, Angular developer, Azure developer, CI/CD, Infrastructure as Code, Bicep, prompt engineering, LLM, MCP, RAG, SEO, indexing, Unity, portfolio',
    image: '/EAIcon.png',
    imageAlt: 'Emirhan Atar portfolio logo'
};

const developerSeo: SeoRouteData = {
    title: 'Emirhan Atar | Full-Stack Developer, Java & Prompt Engineering',
    description: 'Developer portfolio of Emirhan Atar featuring Java, OOP, Design Patterns, Go, Angular, Azure DevOps, Bicep, Key Vault, CI/CD, LLMs, prompt engineering, MCP, RAG, SEO, indexing, and Unity.',
    path: '/dev',
    keywords: 'Emirhan Atar developer, full-stack developer portfolio, Java, Object-Oriented Programming, OOP, Design Patterns, Go, Angular, Flutter, Azure DevOps, Bicep, Key Vault, CI/CD, Infrastructure as Code, LLM, prompt engineering, hooks, plugins, MCP, RAG, SEO, indexing, Unity, software engineer',
    image: '/EAIcon.png',
    imageAlt: 'Emirhan Atar developer portfolio'
};

const fitnessSeo: SeoRouteData = {
    title: 'Emirhan Atar | Fitness, Training & Nutrition',
    description: 'Fitness page of Emirhan Atar with weekly training structure, nutrition plan, lifestyle timeline, workout routine, macro tracking, and healthy living content.',
    path: '/fitness',
    keywords: 'Emirhan Atar fitness, Emirhan Atar nutrition, weekly workout plan, fitness lifestyle, training program, macro nutrition, minimpekka',
    image: '/EmoBody.png',
    imageAlt: 'Emirhan Atar fitness lifestyle'
};

export const routes: Routes = [
    { path: '', component: Home, data: { animation: 'HomePage', seo: homeSeo } },
    { path: 'dev', component: Developer, data: { animation: 'DevPage', seo: developerSeo } },
    { path: 'fitness', component: Fitness, data: { animation: 'FitnessPage', seo: fitnessSeo } },
    { path: '**', redirectTo: '' }
];
