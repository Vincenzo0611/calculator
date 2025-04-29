import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/calculator/calculator.component').then((m) => m.CalculatorComponent);
          }
    },
    {
        path: 'History',
        loadComponent: () => {
            return import('./components/history/history.component').then((m) => m.HistoryComponent);
          }
    },   
];
