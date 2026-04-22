import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Developer } from './developer/developer';
import { Fitness } from './fitness/fitness';
import type { SeoRouteData } from './services/seo';

const homeSeo: SeoRouteData = {
    title: 'Emirhan Atar | Full-Stack & Game Developer',
    description: 'Official portfolio of Emirhan Atar, a full-stack and game developer building Angular, ASP.NET, Azure backend systems, Unity games, and fitness lifestyle content.',
    path: '/',
    keywords: 'Emirhan Atar, emirhanatar, full-stack developer, game developer, Angular developer, ASP.NET developer, Unity developer, Azure backend developer, portfolio',
    image: '/EAIcon.png',
    imageAlt: 'Emirhan Atar portfolio logo'
};

const developerSeo: SeoRouteData = {
    title: 'Emirhan Atar | Full-Stack Developer, Game Developer',
    description: 'Developer portfolio of Emirhan Atar featuring Angular, ASP.NET, Azure, backend systems, Unity game projects, internships, education, and software engineering work.',
    path: '/dev',
    keywords: 'Emirhan Atar developer, full-stack developer portfolio, Angular, ASP.NET, Azure, backend developer, Unity game developer, software engineer',
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
