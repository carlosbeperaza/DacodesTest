import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomePage} from './home.page';
import {RouterModule, Routes} from '@angular/router';


import {ShareModule} from '@shared/share.module';

const routes: Routes = [
    {
        path: '',
        component: HomePage
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
    declarations: [HomePage]
})
export class HomePageModule {
}
