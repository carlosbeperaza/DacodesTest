import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () =>
            import('@pages/home/home.module').then(m => m.HomePageModule),
    },
    {
        path: 'statistics',
        loadChildren: () => import('@pages/statistics/statistics.module').then(m => m.StatisticsPageModule)
    },
    {
        path: 'players',
        loadChildren: () => import('./pages/players/players.module').then(m => m.PlayersPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
