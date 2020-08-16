import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';

import {StatisticsPage} from '@pages/statistics/statistics.page';
import {ShareModule} from '@shared/share.module';

const routes: Routes = [
    {
        path: '',
        component: StatisticsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ShareModule
    ],
    declarations: [StatisticsPage]
})
export class StatisticsPageModule {
}
