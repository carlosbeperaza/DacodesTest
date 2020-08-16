import {Routes} from '@angular/router';

export const content: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../../pages/home/home.module').then(m => m.HomePageModule),
  }
];
