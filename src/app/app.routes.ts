import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Developer } from './developer/developer';
import { Fitness } from './fitness/fitness';

export const routes: Routes = [
    { path: '', component: Home, data: { animation: 'HomePage' } },
    { path: 'dev', component: Developer, data: { animation: 'DevPage' } },
    { path: 'fitness', component: Fitness, data: { animation: 'FitnessPage' } },
    { path: '**', redirectTo: '' }
];
